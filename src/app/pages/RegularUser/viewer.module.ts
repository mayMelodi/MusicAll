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
//----------------------------------//
//            Services              //
//----------------------------------//
import { BackendHTTPService }       from '../../services/backend-http.service';
import { WebSocketService }         from '../../services/web-socket.service';
import { AuthenticationService }    from '../../services/authentication.service';

@NgModule({
  declarations: [
    UserHomeComponent,
    AddSongComponent,
    PlaylistDisplayComponent,
    ContactUsComponent,
    AboutComponent,
    LoginComponent
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
    //BackendHTTPService,
    AuthenticationService,
    WebSocketService,
  ],
  exports: [
    UserHomeComponent,
  ]
})
export class ViewerModule { }
