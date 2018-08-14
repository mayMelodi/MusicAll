import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '../../../../../node_modules/@angular/common/http';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLoginError: boolean=false;
  constructor(private userService : UserService, private router:Router) { }

  ngOnInit() {
  }

  OnSubmit(email,password){
  this.userService.userAuthentication(email,password).subscribe((data: any)=>{
    localStorage.setItem('userToken',data.data.token);
    console.log("THIS IS THE TOKEN"+ data.data.token);
    this.router.navigate(['/home']);
    },(err : HttpErrorResponse)=>{
      this.isLoginError=true;
    });
  }

}
