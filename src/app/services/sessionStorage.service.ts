import { Injectable } from '@angular/core';

@Injectable()
export class ssService {
    constructor(){}

    getData(index: string) {
        debugger;
        return sessionStorage.getItem(index);
    }

    setData(index: string, data: any) {
        debugger;
        sessionStorage.setItem(index, data);
    }

    removeData(index: string) {
        debugger;
        sessionStorage.clear();
    }

}