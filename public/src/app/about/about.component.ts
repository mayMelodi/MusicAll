/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  lat: number = 32.086068;
  lng: number = 34.774538;

  ngOnInit(): void {
    
  }

  constructor(private router : Router, private userService : UserService) { }

 
  }

