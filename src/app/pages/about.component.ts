
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  locations = [];
  
  constructor() { 
    this.locations.push({ latitude: 32.086068, longitude: 34.774538, description: "Headquarter" });
    this.locations.push({ latitude: 32.1202729, longitude: 34.8381131, description: "Omer" });
    this.locations.push({ latitude: 32.0762145, longitude: 34.8463699, description: "May" });    
  }

  ngOnInit() {
  }

}
