import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
loginUser(e){
  e.preventDefault();
  var username = e.target.elements[0].value;
  var password = e.target.elemnets[1].value;
  console.log(username,password);


  if(username=='admin' && password =='admin'){
    
  }
}
}
