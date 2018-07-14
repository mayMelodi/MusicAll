import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router : Router) { }

  ngOnInit() {
  }
  Logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
  isloggedin(){
    var usertoken=localStorage.getItem('userToken');
    if(usertoken==null)
  return false;
  else 
  return true;
  }
}
