import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import * as socketIo from 'socket.io-client';

const SERVER_WS_URL = "http://10.10.15.38/playlist";

interface Socket {
    on(event: string, callback: (data: any) => void );
    emit(event: string, data: any);
}

@Injectable()
export class WebSocketService {

    socket: Socket;
    observer: Observer<any>;
  
    getQuotes() : Observable<any> {
        this.socket = socketIo(SERVER_WS_URL);

        this.socket.on('update', (res) => {
          this.observer.next(res);
        });

        return this.createObservable();
    }

    createObservable() : Observable<any> {
        return new Observable(observer => {
            this.observer = observer;
        });
    }

    private handleError(error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            let errMessage = error.error.message;
            return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Socket.io server error');
      }
}
