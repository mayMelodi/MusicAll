import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    model: User;
    submitted: Boolean = false;
    errorCode: Number = -1;
    emailPattern: RegExp = new RegExp("^[a-z0-9\.\_\%\+\-]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z\.]{2,5}$");

    constructor(private auth: AuthenticationService , private router:Router) {}

    ngOnInit() {
        this.model = new User;
        this.model.email = "",
        this.model.password = ""
    }

    isLogged() { return this.auth.isLoggedIn(); }

    onSubmitLogin(form: NgForm) {
        if (this.emailPattern.test(this.model.email)){
            this.auth.authenticate(this.model.email, this.model.password)
            .subscribe({
                next: () => { this.router.navigate(['/home']); },
                error: () => { this.errorCode = this.auth.errorCode(); }
            });
        } else {
            // @TODO email verification
        }
        
    }
    onSubmitLogout() {
        this.auth.logout()
            .subscribe(
                () => { this.router.navigate(['/home']); },
                () => { this.errorCode = this.auth.errorCode(); }
            );
    }
}
