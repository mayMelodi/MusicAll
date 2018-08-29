import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {
    constructor(private http:HttpClient) { }

    login(email: string, password:string) : Observable<any> {
         return this.http.post<any>("/api/login", { "email": email, "password": password })
             .pipe(map(response => {
                 // login successful if there's a jwt token in the response
                 if (response && response.data && response.data.token) {
                     // store user details and jwt token in local storage to keep user logged in between page refreshes
                     localStorage.setItem('currentUser', JSON.stringify(response.data.token));
                 }
                 return response;
        }));
    }
    logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }
}
