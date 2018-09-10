import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { BackendHTTPService } from '../services/backend-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  logStatus: boolean;
  errorMessage: number;
  model: User;

  constructor(private backend: BackendHTTPService, private router:Router) {
      if (localStorage.getItem('userToken')) this.logStatus = false;
      else this.logStatus = true;
      this.errorMessage = -1;
  }

  ngOnInit() {
    this.model = new User;
    this.model.email = "",
    this.model.password = ""
  }

  emailPattern = "^[a-z0-9\.\_\%\+\-]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z\.]{2,5}$";

  onSubmitLogin(form: NgForm) {
      this.backend.post("api/login", this.model, (err, value) => {
        if (err) {
          this.errorMessage = err.status;
          console.log(err);
        } else {
          localStorage.setItem('userToken', value.data.token);
          localStorage.setItem('privileges', value.data.privileges);
          this.logStatus = true;
          this.errorMessage = -1;
          this.router.navigate(['/home']);
        } 
      });

  }
  onSubmitLogout() {
    this.backend.get("api/logout", (err, value) => {
      if (err) {

      }
      else {
        localStorage.removeItem('userToken');
        localStorage.removeItem('privileges');
        this.logStatus = false;
        this.errorMessage = -1;
        this.router.navigate(['/home']);
      }
    });
  }
}
