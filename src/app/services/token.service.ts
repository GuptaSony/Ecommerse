import { Injectable } from '@angular/core';
import { ssService} from "./sessionStorage.service";


@Injectable()
export class TokenService {
    private accessToken: any;
    private refreshToken: any;

    constructor(private sessionService: ssService){

    }

    getToken(): string {
        debugger;
        if (this.accessToken){
            return this.accessToken;
        } else {
            if (this.sessionService.getData('accessToken')){
                debugger;
                this.accessToken = this.sessionService.getData('accessToken');
                return this.accessToken;
            } else {
                return '';
            }
        }
    }

    getRefreshToken(){
        
        if (this.refreshToken){
            return this.refreshToken;
        } else {
            if (this.sessionService.getData('refreshToken')){
                this.refreshToken = this.sessionService.getData('refreshToken');
                return this.refreshToken;
            } else {
                return null;
            }
        }
    }

    saveToken(token:any) {
        this.sessionService.setData('accessToken', token);
        this.accessToken = token;
    }

    saveRefreshToken(token:any){
        this.sessionService.setData('refreshToken', token);
        this.refreshToken = token;
    }

    destroyToken() {
        this.accessToken = null;
        this.refreshToken = null;
        this.sessionService.removeData('accessToken');
        this.sessionService.removeData('refreshToken');
    }

}