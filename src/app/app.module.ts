import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { AppRouteModule } from './route.module';
import { FormsModule }    from '@angular/forms';
//----------------------------------//
//            Imports               //
//----------------------------------//
import { HttpClientModule }        from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewerModule }            from './pages/RegularUser/viewer.module';
import { PlayerModule }            from './pages/PlayerView/player.module';
//----------------------------------//
//          Declarations            //
//----------------------------------//
import { DefaultComponent }  from './default.component';
import { MenuComponent }     from './menu.component';
import { HomeComponent }     from './home.component';
//----------------------------------//
//            Services              //
//----------------------------------//
import { ServerHandlerService } from './services/server-handler.service';
import { AuthenticationService } from './services/authentication.service';
import { PlayerService } from './services/player.service';

@NgModule({
  declarations: [
    DefaultComponent,
    MenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRouteModule,
    HttpClientModule,
    ViewerModule,
    PlayerModule
  ],
  bootstrap: [
    DefaultComponent,
    MenuComponent
  ],
  providers: [
    ServerHandlerService,
    AuthenticationService,
    PlayerService
  ]
})
export class AppModule {}
