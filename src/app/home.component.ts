import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-home',
  template: `
    <app-user-home *ngIf="!player"></app-user-home>
    <app-player *ngIf="player"></app-player>
  `,
  styles: [``],
})

export class HomeComponent {
  private player:boolean = false;

  
  constructor(private auth: AuthenticationService) {
    if (!this.auth.Privileges || !this.auth.Privileges.length) {
      this.player = false;
    } else {
      if (this.auth.Privileges.indexOf("player") < 0)
        this.player = false;
      else
        this.player = true;
    }
  }
}
