import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div style="width: 90%; margin: auto; margin-top:5%;">
    <div class="row align-items-center">
      <div class="col-12">
        <app-home-regular></app-home-regular>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-12">
        <add-song-component></add-song-component>
      </div>
    </div>
  </div>
  `,
  styles: [``],
})

export class HomeComponent {

}
