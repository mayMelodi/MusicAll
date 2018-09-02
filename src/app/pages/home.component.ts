import { Component, OnInit } from '@angular/core';
import { Song } from '../models/song';
//import { MatTableModule } from '@angular/material/table';

const ELEMENT_DATA:Song[] = [
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  constructor() {}
  ngOnInit() {}
}