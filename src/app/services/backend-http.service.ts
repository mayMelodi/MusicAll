import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { DataSerialize } from '../models/data-serialize';
import { environment } from '../../environments/environment';

@Injectable()
export class BackendHTTPService {

    private baseURL: string = environment.baseURL;

    constructor(
        private http: HttpClient) {
    }
    post(uri:string, resource:DataSerialize, callback:Function) {
        var _token = localStorage.getItem('userToken') || '';
        var _headers:HttpHeaders = new HttpHeaders({'content-type': 'application/json', 'X-Auth-Token': _token})
        console.log(_headers);
        
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
        var _token = localStorage.getItem('userToken') || '';
        var _headers:HttpHeaders = new HttpHeaders({'content-type': 'application/json', 'X-Auth-Token': _token})

        return this.http.get(`${this.baseURL}${uri}`, {headers: _headers})
            .subscribe({
                next: (value:any) => {     
                    console.log(localStorage);
                    callback(false, value);
                },
                error: (err: HttpErrorResponse) => {
                    callback(err, false);
                }
            });
    }
}