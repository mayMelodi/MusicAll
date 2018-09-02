import { BrowserModule }           from '@angular/platform-browser';
import { NgModule }                from '@angular/core';
import { AppRouteModule }          from './route.module';
import { FormsModule }             from '@angular/forms';
// imports
import { DefaultComponent }        from './default.component';
import { MenuComponent }           from './menu.component';
import { AgmCoreModule }           from '@agm/core';
import { YoutubePlayerModule }     from 'ngx-youtube-player';
import { HttpClientModule }        from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule }          from '@angular/material/table';
// declarations
import { HomeComponent }           from './pages/home.component';
import { LoginComponent }          from './pages/login.component';
import { ContactUsComponent }      from './pages/contact-us.component';
import { AboutComponent }          from './pages/about.component';
import { PlayerComponent }         from './pages/player.component';
import { RegisterComponent }       from './pages/register.component';
// services
import { AuthenticationService }   from './services/authentication.service';

@NgModule({
  declarations: [
    DefaultComponent,
    MenuComponent,
    HomeComponent,
    ContactUsComponent,
    AboutComponent,
    PlayerComponent,
    LoginComponent,
    RegisterComponent
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
    AuthenticationService
  ]
})
export class AppModule {}
