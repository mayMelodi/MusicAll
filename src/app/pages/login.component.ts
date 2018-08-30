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

  constructor(private _authentication: AuthenticationService, private router:Router) {}

  ngOnInit() {
    this.model = new User;
    this.model.email = "",
    this.model.password = ""
  }

  model: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}$";

  onSubmit(form: NgForm) {
      console.log(this.model);
      this._authentication.post("api/login", this.model, (err) => {
        console.log(err);
        if (!err) this.router.navigate['home'];
      });

  }

}
