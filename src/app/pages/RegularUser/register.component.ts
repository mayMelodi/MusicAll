import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: User;
  submitted: boolean;
  errorCode: Number;

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.model = new User();
    this.model.firstname = "",
    this.model.lastname = "",
    this.model.email = "",
    this.model.password = "",
    this.model.privileges = [];
    this.submitted = false;
    this.errorCode = -1;
  }

  emailPattern = "^[a-zA-Z0-9\.\_\%\+\-]+\@\[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,4}$";
  namePattern = "^[a-zA-Z][a-zA-Z]+";

  onSubmit(form: NgForm) {
    this.auth.register(this.model.email, this.model.firstname, this.model.lastname, this.model.password)
      .subscribe({
        next: () => { 
          this.submitted = true;
          this.errorCode = -1;
        }, error: () => this.errorCode = this.auth.errorCode()
      });
    console.log(JSON.stringify(this.model));
  }

  get errorMessage() {
    switch(this.auth.errorCode()) {
      case 500:
        return "An internal error has been accord";
      case -1:
        return "";
      default:
        return "Unknown error has been accord. please try again latter"
    }
   }
}