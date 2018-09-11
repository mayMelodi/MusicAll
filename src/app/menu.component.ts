import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  constructor(private _auth: AuthenticationService) {}
  ngOnInit() {}

  isloggedin() {
    return this._auth.isLoggedIn();
  }
}
