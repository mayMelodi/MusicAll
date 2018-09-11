import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerHandlerService } from './server-handler.service';
import { HttpResponseObject } from '../models/http-response-object';
import { AuthenticationService } from './authentication.service';
import { Link } from '../models/Link';

@Injectable()

export class PlayerService {

    constructor(private server: ServerHandlerService, private auth: AuthenticationService) {}

    nextSong() :Observable<HttpResponseObject> {
        return new Observable(observer => {
            this.server.get("api/playlist/next", this.auth.Token)
                .subscribe({
                    next: (value) => observer.next(value),
                    error: (err) => observer.error(err)
                })
        });
    }
    addSong(link: string) {
        return new Observable(observer => {
            this.server.post("api/playlist/add", new Link(link), this.auth.Token)
                .subscribe({
                    next: (value) => observer.next(value),
                    error: (err) => observer.error(err)
                });
        });
    }
}