import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from "@angular/common/http";
import { throwError, Observable, BehaviorSubject, of } from "rxjs";
import { catchError, filter, take, switchMap ,finalize} from "rxjs/operators";

import { TokenService } from "./token.service";
import { AuthCodeService } from "./authCode.service";
import { UrlConstants } from "../constants/urlConstants";
import { UserService } from "./user.service";
import { ApiService } from "./api.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    private AUTH_HEADER = "Authorization";
    private token = "secrettoken";
    private refreshTokenInProgress = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
        null
    );

    constructor(
        private tokenService: TokenService)
         {
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if (!req.headers.has("Content-Type")) {
            debugger;
            req = req.clone({
                headers: req.headers.set("Content-Type", "application/json")
            });
        }

        req = this.addAuthenticationToken(req);

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error && error.status === 401) {
                    // 401 errors are most likely going to be because we have an expired token that we need to refresh.
                    if (this.refreshTokenInProgress) {
                        // If refreshTokenInProgress is true, we will wait until refreshTokenSubject has a non-null value
                        // which means the new token is ready and we can retry the request again
                        return this.refreshTokenSubject.pipe(
                            filter(result => result !== null),
                            take(1),
                            switchMap(() => next.handle(this.addAuthenticationToken(req)))
                        );
                    } else {
                        this.refreshTokenInProgress = true;

                        // Set the refreshTokenSubject to null so that subsequent API calls will wait until the new token has been retrieved
                        this.refreshTokenSubject.next(null);

                        return this.refreshAccessToken().pipe(
                            switchMap((success: boolean) => {
                                this.refreshTokenSubject.next(success);
                                return next.handle(this.addAuthenticationToken(req));
                            }),
                            // When the call to refreshToken completes we reset the refreshTokenInProgress to false
                            // for the next time the token needs to be refreshed
                            finalize(() => (this.refreshTokenInProgress = false))
                        );
                    }
                } else {
                    return throwError(error);
                }
            })
        ) as Observable<HttpEvent<any>>;
    }

    private refreshAccessToken(): Observable<any> {
        debugger;
        return of("secret token");
    }

    private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
        debugger;
        // If we do not have a token yet then we should not set the header.
        // Here we could first retrieve the token from where we store it.
        this.token=this.tokenService.getToken();
        if (!this.token) {
            debugger;
            return request;
        }
        return request.clone({
            headers: request.headers.set(this.AUTH_HEADER, "Bearer " + this.token)
        });
    }
}