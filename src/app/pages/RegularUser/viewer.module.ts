import { NgModule } from '@angular/core';
//----------------------------------//
//            Imports               //
//----------------------------------//
import { CommonModule }             from '@angular/common';
import { HttpClientModule }         from '@angular/common/http';
import { MatTableModule }           from '@angular/material';
import { FormsModule }              from '@angular/forms';
import { AgmCoreModule }            from '@agm/core';
import { ViewerRoutes }             from './viewer.routing';
//----------------------------------//
//          Declarations            //
//----------------------------------//
import { AddSongComponent }         from './add-song.component';
import { PlaylistDisplayComponent } from './playlist-dsiplay.component';
import { ContactUsComponent }       from './contact-us.component';
import { AboutComponent }           from './about.component';
import { UserHomeComponent }        from './user-home.component';
import { LoginComponent }           from './login.component';
import { RegisterComponent }        from './register.component';
import { DiscoverComponent }        from './discover.component';
//----------------------------------//
//            Services              //
//----------------------------------//
import { WebSocketService }         from '../../services/web-socket.service';

@NgModule({
  declarations: [
    UserHomeComponent,
    AddSongComponent,
    PlaylistDisplayComponent,
    ContactUsComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    DiscoverComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    ViewerRoutes,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyB9KcHxuhLNREX9ySyQuvRkQcuyG9BEsrU'
    })
  ],
  providers: [
    WebSocketService,
  ],
  exports: [
    UserHomeComponent,
  ]
})
export class ViewerModule { }
