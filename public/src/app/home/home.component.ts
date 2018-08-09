import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userClaims : any;

  constructor(private router : Router, private userService : UserService) { }

  ngOnInit() {
  //   this.userService.getUserClaims().subscribe((data : any)=>{
  //     this.userClaims=data; 
  
  // });
} 

  Logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/home']);
  }

  isloggedin(){
    var usertoken=localStorage.getItem('userToken');
    return (usertoken!=null);
  }

}
