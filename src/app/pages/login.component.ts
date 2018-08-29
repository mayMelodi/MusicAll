import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from '../models/user.model';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authentication: AuthenticationService) {}

  ngOnInit() {
    this.model = new User;
    this.model.email = "",
    this.model.password = ""
  }

  model: User;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}$";

  onSubmit(form: NgForm) {
      console.log(JSON.stringify(this.model));
      this._authentication.login(this.model.email, this.model.password)
          .subscribe(data => console.log(data));
  }

}
