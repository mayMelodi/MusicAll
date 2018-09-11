import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebSocketService } from '../../services/web-socket.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { Song } from '../../models/song';
import { Action } from '../../models/action';

@Component({
  selector: 'app-playlist-display',
  templateUrl: './playlist-display.component.html',
  styleUrls: ['./playlist-display.component.css']
})

export class PlaylistDisplayComponent implements OnInit, OnDestroy {


  displayedColumns: string[] = ['picture','title', 'duration'];
  dataSource: MatTableDataSource<Song>;
  sub: Subscription;

  constructor(private socketService: WebSocketService) { 
      this.dataSource = new MatTableDataSource<Song>([]);
  }

  ngOnInit() {
    this.sub = this.socketService.getQuotes()
    .subscribe(value => {
      if (value.action == Action.ADD) { this.dataSource.data.push(value.data); }
      if (value.action == Action.REMOVE) {
        this.dataSource.data.shift();
      }
      this.dataSource._updateChangeSubscription();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
