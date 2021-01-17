import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UrlConstants } from "../constants/urlConstants";


@Injectable()
export class ApiService {
    private newToken: any;
    constructor(
        private http: HttpClient
    ) { }

    private formatErrors(error: any) {
        return throwError(error.error);
    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${path}`, { params })
            .pipe(catchError(this.formatErrors));
    }

    put(path: string, body: object = {}): Observable<any> {
        return this.http.put(
            `${path}`,
            JSON.stringify(body)
        ).pipe(catchError(this.formatErrors));
    }

    post(path: string, body: object = {}): Observable<any> {
        return this.http.post(
            `${path}`,
            JSON.stringify(body)
        ).pipe(catchError(this.formatErrors));
    }

    delete(path: any): Observable<any> {
        return this.http.delete(
            `${path}`
        ).pipe(catchError(this.formatErrors));
    }


    upload(path: string, body: FormData): Observable<any> {
        return this.http.post(
            path, body
        ).pipe(catchError(this.formatErrors));
    }

    formatPost(path: string, body: FormData): Observable<any> {
        return this.http.post(
            path, body
        ).pipe(catchError(this.formatErrors));
    }
}