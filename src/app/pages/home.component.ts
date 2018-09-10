import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-user-home></app-user-home>
  `,
  styles: [``],
})

export class HomeComponent {
  private player:boolean = false;

  constructor() {
    var priv = localStorage.getItem("privileges")
    if (!priv || priv === "") {
      this.player = false;
    } else {
      if (priv.indexOf('player') < 0)
        this.player = false;
      else
        this.player = true;
    }
  }
}
