import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerRoutes } from './player.routing';
import { PlayerService } from '../../services/player.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PlayerRoutes
  ],
  declarations: [
    PlayerComponent
  ],
  providers: [
    PlayerService
  ],
  exports: [
    PlayerComponent
  ]
})
export class PlayerModule { }
