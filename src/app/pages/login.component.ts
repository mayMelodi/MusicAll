import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logStatus;

  constructor(private _authentication: AuthenticationService, private router:Router) {
      if (localStorage.getItem('userToken')) this.logStatus = false;
      else this.logStatus = true;
  }

  ngOnInit() {
    this.model = new User;
    this.model.email = "",
    this.model.password = ""
  }

  model: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}$";

  onSubmitLogin(form: NgForm) {
      console.log("** --- Login Proccess --- ***");
      this._authentication.post("api/login", this.model, (err, value) => {
        if (err) console.log(err);
        else {
          localStorage.setItem('userToken', value.data.token);
          this.logStatus = true;
          this.router.navigate(['/home']);
        } 
      });

  }
  onSubmitLogout() {
    console.log("** --- Logout Proccess --- ***");
    this._authentication.get("api/logout", (err, value) => {
      if (err) console.log(err);
      else {
        localStorage.removeItem('userToken');
        this.logStatus = false;
        this.router.navigate(['/home']);
      }
    });
  }
}
