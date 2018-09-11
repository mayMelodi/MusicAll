import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../../services/player.service';
import { DataSerialize } from '../../models/data-serialize';


@Component({
  selector: 'add-song-component',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css'],
})

export class AddSongComponent implements OnInit {

  textStyle;
  inputStyle;
  url: string;
  isNotSent: boolean;
  isEmpty: boolean;
  isValid: boolean;
  urlValidator = new RegExp(/^((http[s]?\:\/\/){0,1}([Ww][Ww][Ww]\.)){0,1}[Yy][Oo][Uu][Yt][Uu][Bb][Ee]\.[Cc][Oo][Mm]\/(([Ww]atch\?v=)|([vV]\/))(...........)/g);

  constructor(private backend: PlayerService, private router:Router) {}

  ngOnInit() {
    this.url = "";
    this.isNotSent = false;
    this.isEmpty = false;
    this.isValid = false;
    this.textStyle = {};
    this.inputStyle = {};
    this.inputOnBlurOut();
  }

  onSubmitNewSong() {
    if (!this.url || this.url == "") {
      this.isEmpty = true;
      return;
    } else {
      this.isEmpty = false;
    }
    if (!this.urlValidator.test(this.url)) {
      this.isValid = true;
      return;
    } else {
      this.isValid = false;
    }
    this.backend.addSong(this.url)
      .subscribe({
        next:() => {
          this.url = "";
          this.inputOnBlurOut();
          this.isNotSent = false;
        },
        error: () => this.isNotSent = true
      });
  }

  inputOnBlur(): void {
    if (this.url == "") {
      this.textStyle['font-size'] = "10px";
      this.textStyle['bottom'] = "100%";
      this.inputStyle['color'] = '#ffffff';
    }
  }
  inputOnBlurOut(): void {
    if (this.url == "") {
      this.textStyle['font-size'] = "36px";
      this.textStyle['bottom'] = "0px";
      this.inputStyle['color'] = "transparent";
    }
  }
}
