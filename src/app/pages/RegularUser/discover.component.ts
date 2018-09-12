import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

// gener = ['Pop','Rock','Classic','Metal','Jazz','Blues','Country','Hip Hop','Latin','Rap'];
bands = ['RadioHad','Coldplay','Red Hot Chili Pepper','My chimical romance','Backstrit Boys','Maroon 5',
          'Revivos Project','Mashina','Aviv Gefen and the Mistaces','Led Zepplin','Hive(Kaveret)','Beatles'];
boys = ['Adam Levin','The Weekend','Michel Jeckson','David bowie','Sting','Omer Adam','Idan Raichel',
        'Maluma','Stromae','Bruno Mars','David Cook','Ed Sheeran','Idan Amedi','Frank Sinnetra','Justin Bibber'];
girls = ['Beyonce','Adele','Sia','Rihanna','Ariana Grande','Camila Cabello','Dikla','Rita','Ofra Haza','Miri Mezika',
          'Shakira','Cardi B','Niki Minaj','Jennifer Lopez','Rita Ora','Dua Lipa'];
dj = ['Avicii','David Gutte','Vini Vichi','Hardwell','KYGO','Skazi'];
musicEra = ['70s','80s','90s','2000'];
songs = ['I did it my way','Ops i did it again','Comci Comsa','Yalla Motti Go Home','Like couple of nuts'];
}
