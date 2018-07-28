import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:35257';

  constructor(private http: HttpClient) { }

  registerUser(user : User){
    
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    return this.http.post(this.rootUrl + '/api/User/Register', body);
  }

  userAuthentication(userName,password){
    var data = "username="+userName+"@password="+password+"&grant_type=password"
    var reqHeader=new HttpHeaders({'content-type': 'application/x-www-urlencoded'});
    return this.http.post(this.rootUrl+'/token',data,{headers:reqHeader})
  }
}
