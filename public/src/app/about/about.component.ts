import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private router : Router, private userService : UserService) { }

  ngOnInit() {
  }

}
