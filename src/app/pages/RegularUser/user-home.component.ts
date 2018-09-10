import { Component } from '@angular/core';

@Component({
  selector: 'app-user-home',
  template: `
  <div class="main-container">
      <div class="playlistDiplay">
          <app-playlist-display></app-playlist-display>
      </div>
      <div *ngIf="isloggedin()" class="newSongDisplay">
          <add-song-component></add-song-component>
      </div>
  </div>
  `,
  styles: [`
  .main-container {
      width: 96%;
      height: 100%;
      margin-left: 2%;
      margin-right: 2%;
      display: block;
  }
  .playlistDiplay {
    display: block;
    height: 85%;
    overflow: auto;
    border: 0px;
  }
  .newSongDisplay {
    display: block;
    height: 10%;
    margin-top: 1%;
    border: 0px;
  }
  `],
})

export class UserHomeComponent {

  isloggedin() {
    if (!localStorage.getItem('userToken')) return false;
    else return true;
  }

}
