import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { AppRouteModule }           from './route.module';
import { FormsModule }              from '@angular/forms';
//----------------------------------//
//            Imports               //
//----------------------------------//
import { DefaultComponent }         from './default.component';
import { MenuComponent }            from './menu.component';
import { AgmCoreModule }            from '@agm/core';
import { YoutubePlayerModule }      from 'ngx-youtube-player';
import { HttpClientModule }         from '@angular/common/http';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import { MatTableModule }           from '@angular/material/table';
//----------------------------------//
//          Declarations            //
//----------------------------------//
import { HomeComponent }            from './pages/home.component';
import { LoginComponent }           from './pages/login.component';
import { ContactUsComponent }       from './pages/contact-us.component';
import { AboutComponent }           from './pages/about.component';
import { RegisterComponent }        from './pages/register.component';
// Player Station Views
import { PlayerComponent }          from './pages/PlayerStation/player.component';
//Regular User Views
import { UserHomeComponent }        from './pages/RegularUser/user-home.component';
import { PlaylistDisplayComponent } from './pages/RegularUser/playlist-dsiplay.component';
import { AddSongComponent }         from './pages/RegularUser/add-song.component';
//----------------------------------//
//            Services              //
//----------------------------------//
import { BackendHTTPService }       from './services/backend-http.service';
import { WebSocketService }         from './services/web-socket.service';

@NgModule({
  declarations: [
    DefaultComponent,
    MenuComponent,
    HomeComponent,
    ContactUsComponent,
    AboutComponent,
    PlayerComponent,
    LoginComponent,
    RegisterComponent,
    PlaylistDisplayComponent,
    AddSongComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouteModule,
    YoutubePlayerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyB9KcHxuhLNREX9ySyQuvRkQcuyG9BEsrU'
    }),
  ],
  bootstrap: [
    DefaultComponent,
    MenuComponent
  ],
  providers: [
    BackendHTTPService,
    WebSocketService
  ]
})
export class AppModule {}
