import { Component } from '@angular/core';
import { Action } from '../models/action';
import { Event } from '../models/event';
import { Song } from '../models/song';
import { WebSocketService } from '../services/web-socket.service';

const ELEMENT_DATA: Song[] = [
  //{ "title": "AWOLNATION - Sail (Official Music Video)", "picture": { "url": "https://i.ytimg.com/vi/tgIqecROs5M/default.jpg", "width":120, "height":90 }, "duration":"PT4M24S" },
  //{ "title":"Sia - The Greatest","picture":{"url":"https://i.ytimg.com/vi/GKSRyLdjsPA/default.jpg","width":120,"height":90},"duration":"PT5M52S"},
  //{ "title":"Luis Fonsi - Despacito ft. Daddy Yankee","picture":{"url":"https://i.ytimg.com/vi/kJQP7kiw5Fk/default.jpg","width":120,"height":90},"duration":"PT4M42S"},
  //{ "title":"LSD - Genius ft. Sia, Diplo, Labrinth","picture":{"url":"https://i.ytimg.com/vi/HhoATZ1Imtw/default.jpg","width":120,"height":90},"duration":"PT3M43S"}
]


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  action = Action;
  ioConnection: any;
  displayedColumns: string[] = ['picture','title', 'duration'];
  dataSource = ELEMENT_DATA;

  constructor(private socketService: WebSocketService) { }

  ngOnInit(): void {
   // this.initIoConnection();
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    

    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('connected');
      });
      
    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('disconnected');
      });
  }

  public notification(action: Action, song?: Song, ): void {

    if (action === Action.ADDED) {
      if (song) { ELEMENT_DATA.push(song); }
    } else if (action === Action.DELETED) {
      ELEMENT_DATA.shift();
    }
  }

}