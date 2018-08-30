import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { DataSerialize } from '../models/data-serialize';

@Injectable()
export class AuthenticationService {

    private baseURL: string = "http://localhost";

    constructor(
        private http: HttpClient) {
    }
    post(uri:string, resource:DataSerialize, callback:Function) {
        return this.http.post(`${this.baseURL}/${uri}`,
            resource.toJson(),
            {headers: new HttpHeaders({'content-type': 'application/json','No-Auth' : 'True'})})
                .subscribe(
                    (value:any) => {
                        localStorage.setItem('userToken',value.data.token);
                        callback(false);
                    }, (err: HttpErrorResponse) => {
                        callback(err);
                    }
                );
    }
    delete (uri:string){
        localStorage.removeItem('userToken');
    }
}
