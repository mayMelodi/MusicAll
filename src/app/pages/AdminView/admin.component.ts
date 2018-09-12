import { Component, OnInit } from '@angular/core';
import { ContactDetails } from '../../models/contact-derails';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[];
  message: ContactDetails;
  dataset: ContactDetails[];

  constructor() { }

  ngOnInit() {
  }

}
