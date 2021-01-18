import { Injectable } from '@angular/core';

@Injectable()
export class AuthCodeService {
    constructor(){

    }
   private authCode:any=null;

    getCode(): string {
        debugger;
        return this.authCode;
    }

    setCode(code: string) {
        debugger;
        this.authCode = code;
    }

    destroyCode() {
        debugger;
        this.authCode = null;
    }

}