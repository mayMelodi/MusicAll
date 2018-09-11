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
import { HomeComponent }     from './pages/home.component';
import { RegisterComponent } from './pages/register.component';
import { DiscoverComponent } from './pages/discover.component';
//----------------------------------//
//            Services              //
//----------------------------------//
import { BackendHTTPService } from './services/backend-http.service';
import { ServerHandlerService } from './services/server-handler.service';

@NgModule({
  declarations: [
    DefaultComponent,
    MenuComponent,
    HomeComponent,
    RegisterComponent,
    DiscoverComponent
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
    BackendHTTPService,
    ServerHandlerService
  ]
})
export class AppModule {}
