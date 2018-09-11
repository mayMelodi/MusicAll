import { Injectable } from '@angular/core';
import { ServerHandlerService } from './server-handler.service';
import { DataSerialize } from '../models/data-serialize';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {

    constructor(private server: ServerHandlerService) { }

    send(data: DataSerialize) {
        return new Observable(observer => {
            this.server.post('/contact-us', data)
                .subscribe({
                    next: event => observer.next(event),
                    error: err => observer.error(err) 
                });
        })
    }

}
