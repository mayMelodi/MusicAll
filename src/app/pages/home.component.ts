import { Component } from '@angular/core';


export interface Song {
  title: string;
  duration: string;
  picture: object;
}

const ELEMENT_DATA: Song[] = [
  { "title": "AWOLNATION - Sail (Official Music Video)", "picture": { "url": "https://i.ytimg.com/vi/tgIqecROs5M/default.jpg", "width":120, "height":90 }, "duration":"PT4M24S" },
  { "title":"Sia - The Greatest","picture":{"url":"https://i.ytimg.com/vi/GKSRyLdjsPA/default.jpg","width":120,"height":90},"duration":"PT5M52S"},
  { "title":"Luis Fonsi - Despacito ft. Daddy Yankee","picture":{"url":"https://i.ytimg.com/vi/kJQP7kiw5Fk/default.jpg","width":120,"height":90},"duration":"PT4M42S"},
  { "title":"LSD - Genius ft. Sia, Diplo, Labrinth","picture":{"url":"https://i.ytimg.com/vi/HhoATZ1Imtw/default.jpg","width":120,"height":90},"duration":"PT3M43S"}
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  displayedColumns: string[] = ['picture', 'title', 'duration'];
  dataSource = ELEMENT_DATA;

  constructor() {
    console.log(JSON.stringify(ELEMENT_DATA));
  }
}