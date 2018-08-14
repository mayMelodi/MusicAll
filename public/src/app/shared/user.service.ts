import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = '';

  constructor(private http: HttpClient) { }

  registerUser(user : User){
    
    const body: User = {
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    var reqHeader = new HttpHeaders({'No-Auth' : 'True'});
    return this.http.post(this.rootUrl + '/api/register', body,{headers: reqHeader});
  }

  userAuthentication(email,password){
    var data = { "email": email , "password": password } ;
    var reqHeader=new HttpHeaders({'content-type': 'application/json','No-Auth' : 'True'});
    return this.http.post(this.rootUrl+'/api/login',data,{headers:reqHeader})
  }
  getUserClaims(){
    return this.http.get(this.rootUrl+'api/GetUserClaims');
  }
}

