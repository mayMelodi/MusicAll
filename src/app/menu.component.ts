import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  isloggedin() {
    if (!localStorage.getItem('userToken')) return false;
    else return true;
  }
}
