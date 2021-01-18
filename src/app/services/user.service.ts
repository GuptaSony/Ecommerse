import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlConstants } from "../constants/urlConstants";
import { map } from 'rxjs/operators';
import { ApiService } from "./api.service";
import {ssService} from "./sessionStorage.service";
import {Router} from "@angular/router";
import { TokenService } from './token.service';
import {UserAuthenticateInput} from '../shared/models/user-authenticate-input.model';

@Injectable()
export class UserService {

    constructor (
        private apiService: ApiService,
        private sessionService: ssService,
        private router: Router,
        private tokenService: TokenService
    ) {}


    loginService(userData:UserAuthenticateInput): Observable<any>{
        debugger;
        return this.apiService.post(UrlConstants.BaseUrl+UrlConstants.Auth.Post.Login, userData).pipe(map(
            data => {
                debugger;
                if (data.result.token){
                    debugger;
                    this.tokenService.saveToken(data.result.token);
                    localStorage.setItem('returnValue',data.result.return_value);
                }
                return data;
            }
        ));
    }
}
