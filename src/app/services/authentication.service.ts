import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ServerHandlerService } from './server-handler.service';
import { Observable } from 'rxjs';
import { HttpResponseObject } from '../models/http-response-object';

@Injectable()

export class AuthenticationService {

    private tokenKey:string = "Token"

    private _user: User;
    private _authenticate: Boolean;
    private _token: string;
    private _errorCode: Number;

    constructor(private _server: ServerHandlerService) {
        if (localStorage.getItem(this.tokenKey)){
            this._authenticate = true;
            this._token = localStorage.getItem(this.tokenKey);
        } else {
            localStorage.clear();
            this._authenticate = false;
        }
        this._errorCode = -1;
    }

    authenticate(email: string, password: string): Observable<Boolean> {
        this._user = new User;
        this._user.email = email;
        this._user.password = password;

        return new Observable((observer) => {
            this._server.post('api/login', this._user, this._token)
            .subscribe({
                next: (value: HttpResponseObject) => {
                    try {
                        localStorage.setItem(this.tokenKey, value.data['token']);
                        this._token = value.data['token'];
                        this._user.privileges = value.data['privileges'];
                        this._authenticate = true;
                        observer.next();
                    } catch (err) {
                        localStorage.setItem(this.tokenKey, value.data['token']);
                        this._token = "";
                        this._user.privileges = new Array<string>();
                        this._authenticate = false;
                        observer.error();
                    }
                },
                error: (err: HttpResponseObject) => {
                    this._errorCode = err.code;
                    this._authenticate = false;
                    observer.error();
                }
            })
        })
    }

    register (email: string, firstname: string, lastname: string, password: string) {
        this._user = new User;
        this._user.firstname = firstname;
        this._user.lastname = lastname
        this._user.email = email;
        this._user.password = password;

        return new Observable((observer) => {
            this._server.post('api/register', this._user, this._token)
                .subscribe({
                    next: (value: HttpResponseObject) => {
                        try {
                            localStorage.setItem(this.tokenKey, value.data['token']);
                            this._token = value.data['token'];
                            this._user.privileges = value.data['privileges'];
                            this._authenticate = true;
                            observer.next();
                        } catch (err) {
                            localStorage.setItem(this.tokenKey, value.data['token']);
                            this._token = "";
                            this._user.privileges = new Array<string>();
                            this._authenticate = false;
                            observer.error();
                        }
                    },
                    error: (err: HttpResponseObject) => {
                        this._errorCode = err.code;
                        this._authenticate = false;
                        console.log(err);
                        observer.error();
                    }
            })
        })
    }

    logout(): Observable<Boolean> { 
        return new Observable(observer => {
            this._server.get('api/logout', this._token.toString())
                .subscribe({
                    next: () => {
                        localStorage.removeItem(this.tokenKey);
                        this._token = '';
                        this._user = null;
                        this._authenticate = false;
                        observer.next();
                    },
                    error: (err) => {
                        this._errorCode = err.code;
                        observer.error();
                    }
                });
            })
    }
    
    errorCode() { return this._errorCode; }
    isLoggedIn() { return this._authenticate; }
    
    get Token() { return this._token; }
    get FirtName() { return this._user.firstname; }
    get Lastname() { return this._user.lastname; }
    get Email() { return this._user.email; }

    get Privileges() { 
        if (this._user)
            return this._user.privileges
        else
            return [];
    }
}