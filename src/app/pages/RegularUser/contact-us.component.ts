import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ContactDetails } from '../../models/contact-derails';
import { AuthenticationService } from '../../services/authentication.service';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {

    model: ContactDetails;
    submitted: boolean;
    error: Error;

    constructor(private auth: AuthenticationService, private contact: ContactService) {}

    ngOnInit() {
        this.model = new ContactDetails;
        if (this.auth.isLoggedIn())
            this.model.fromJson({
                firstname: this.auth.FirtName || "",
                lastname: this.auth.Lastname || "",
                email: this.auth.Email || "",
                message: ""
            });
        this.submitted = false;
        this.error = null;
    }

  onSubmit(form: NgForm) {
      if (form.valid)
          this.contact.send(this.model).subscribe({
              next: () => {
                  this.ngOnInit();
                  this.submitted = true;
              },
              error: (err) => {
                  this.error = err;
              }
          })
    
  }
}
