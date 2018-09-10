import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <ng-container *ngIf="player; then playerView; else regularUserView">
  </ng-container>
  <ng-template #playerView>
    <app-player></app-player>
  </ng-template>
  <ng-template #regularUserView>
    <app-user-home></app-user-home>
  </ng-template>
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
