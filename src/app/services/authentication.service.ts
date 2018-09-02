import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { DataSerialize } from '../models/data-serialize';

@Injectable()
export class AuthenticationService {

    private baseURL: string = "http://10.10.15.38/";

    constructor(
        private http: HttpClient) {
    }
    post(uri:string, resource:DataSerialize, callback:Function) {

        var _headers:HttpHeaders = new HttpHeaders({'content-type': 'application/json','No-Auth' : 'True'})
        if (localStorage.getItem('userToken')) _headers.append("x-auth-token", localStorage.getItem('userToken'));

        return this.http.post(`${this.baseURL}${uri}`, resource.toJson(),{headers: _headers})
            .subscribe({
                next: (value:any) => {
                    callback(false, value);
                },
                error: (err: HttpErrorResponse) => {
                    callback(err, false);
                }
            });
    }
    get (uri:string, callback:Function){
        var _headers = new HttpHeaders({'content-type': 'application/json','No-Auth' : 'True'})
        if (localStorage.getItem('userToken')) _headers.append("x-auth-token", localStorage.getItem('userToken'));

        return this.http.get(`${this.baseURL}${uri}`, {headers: _headers})
            .subscribe({
                next: (value:any) => {
                    callback(false, value);
                },
                error: (err: HttpErrorResponse) => {
                    callback(err, false);
                }
            });
    }
}
