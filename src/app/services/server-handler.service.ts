import { Injectable } from "@angular/core";
import {
    HttpClient,
    HttpErrorResponse,
    HttpResponse,
    HttpRequest,
    HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { HttpResponseObject } from "../models/http-response-object";
import { DataSerialize } from "../models/data-serialize";
import { environment } from "../../environments/environment";

@Injectable()

export class ServerHandlerService {

    _baseURL = environment.baseURL;

    constructor(private _server: HttpClient) {}

    public get(url: string, token?:string): Observable<HttpResponseObject> {
        var _token = token || "";
        var _headers = new HttpHeaders({'content-type': 'application/json', 'X-Auth-Token': _token});
        var _request = new HttpRequest<Object>("GET", `${this._baseURL}${url}`, {headers: _headers})
        return this.send(_request);
    }

    public post(url: string, data: DataSerialize, token?:string): Observable<HttpResponseObject> {
        var _token = token || "";
        var _headers = new HttpHeaders({'content-type': 'application/json', 'X-Auth-Token': _token});
        var _request = new HttpRequest<Object>("POST",`${this._baseURL}${url}`, data.toJson(), {headers: _headers});
        return this.send(_request);
    }

    public delete(url: string, data: DataSerialize, token:string): Observable<HttpResponseObject> {
        var _token = token || "";
        var _headers = new HttpHeaders({'content-type': 'application/json', 'X-Auth-Token': _token});
        var _request = new HttpRequest<Object>("DELETE",`${this._baseURL}/${url}`, data.toJson(), {headers: _headers});
        return this.send(_request);
    }

    private send(request: HttpRequest<Object>): Observable<HttpResponseObject> {
        return new Observable<HttpResponseObject>((observer) => {
            this._server.request(request)
            .subscribe({
                next: (res: HttpResponse<any>) => {
                    if (res.type != 0) {
                        observer.next(new HttpResponseObject(res.status, res.statusText, res.body.data));
                    }
                },
                error: (err:HttpErrorResponse) => {
                        observer.error(new HttpResponseObject(err.status, err.statusText, null));
                }
            });
        });
    }
}