import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendHTTPService } from '../../services/backend-http.service';
import { PlayerComponent } from './player.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayerRoutes } from './player.routing';

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
    BackendHTTPService
  ],
  exports: [
    PlayerComponent
  ]
})
export class PlayerModule { }
