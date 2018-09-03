import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../models/event';

import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:8080';

@Injectable({
    providedIn: 'root'
})
export class WebSocketService {

  private socket;

  public initSocket(): void {
      this.socket = socketIo(SERVER_URL);
  }
  
  public onEvent(event: Event): Observable<any> {
      return new Observable<Event>(observer => {
          this.socket.on(event, (data) => observer.next(data));
      });
  }
}
