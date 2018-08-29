import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {

  ngOnInit() {
    this.model = {
      firstname: "",
      lastname: "",
      email: "",
      message: ""
    };
    this.submitted = false;
  }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}$";
  
  model: ContactDetails;
  submitted: boolean;

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(JSON.stringify(this.model));
  }
}

class ContactDetails {
  public firstname: string;
  public lastname: string;
  public email: string;
  public message: string;

  constructor() { 
      this.firstname = null;
      this.lastname = null;
      this.email = null;
      this.message = null;
   }
}