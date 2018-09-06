import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { NgForm } from '@angular/forms';
import { DataSerialize } from '../../models/data-serialize';


export class URL implements DataSerialize {

  link: string;

  constructor(url?: string) {
    if (url) this.link = url;
  }

  toJson() {
    return { "url": this.link };
  }
  fromJson(json: any): void {
    this.link = json.url;
  }
}

@Component({
  selector: 'add-song-component',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css'],
})

export class AddSongComponent implements OnInit {

  textStyle;
  inputStyle;
  url: string;

  constructor(private _authentication: AuthenticationService, private router:Router) {}

  ngOnInit() {
    this.url = "";
    this.textStyle = {};
    this.inputStyle = {};
    this.inputOnBlurOut();
  }

  onSubmitNewSong(form: NgForm) {
    
    this._authentication.post("api/playlist/add", new URL(this.url), (err, value) => {
      if (err){ 
        console.log(err);
      }
      else {
        this.url = "";
        this.inputOnBlurOut();
     } 
    });

}

  inputOnBlur() {
    if (this.url == "") {
      this.textStyle['font-size'] = "10px";
      this.textStyle['bottom'] = "100%";
      this.inputStyle['color'] = '#ffffff';
    }
  }
  inputOnBlurOut() {
    if (this.url == "") {
      this.textStyle['font-size'] = "36px";
      this.textStyle['bottom'] = "0px";
      this.inputStyle['color'] = "transparent";
    }
  }
}
