import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutes } from './admin.routing';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutes
  ],
  declarations: [
    AdminComponent
  ],
  providers: [
    
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
