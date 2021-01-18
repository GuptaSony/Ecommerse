import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ssService } from './sessionStorage.service';

@Injectable()
export class HttpTokenInterceptor2 implements HttpInterceptor {
    constructor(private sessionService: ssService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headersConfig:any = {
            //'Content-Type': 'application/x-www-form-urlencoded'
           'Content-Type': 'application/json'
        };

        const token = this.sessionService.getData('accessToken');
        debugger;
        if (token) {
            debugger;
            headersConfig['Authorization'] = 'Bearer '+token;
        }

        const request = req.clone({ setHeaders: headersConfig });
        return next.handle(request);
    }
}
