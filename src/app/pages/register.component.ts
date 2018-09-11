import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit() {
    this.model = {
      firstname: "",
      lastname: "",
      userName:"",
      email: "",
      password: ""
    };
    this.submitted = false;
  }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}$";
  namePattern = "[a-zA-Z]";

  model: RegistrationDetails;
  submitted: boolean;

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(JSON.stringify(this.model));
  }
}
  class RegistrationDetails {
    public firstname: string;
    public lastname: string;
    public userName: string;
    public email: string;
    public password: string;
  
    constructor() { 
        this.firstname = null;
        this.lastname = null;
        this.userName = null;
        this.email = null;
        this.password = null;
     }
}
