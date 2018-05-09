import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { LAYOUT_ROUTING } from './layout.routing'


@NgModule({
  declarations: [
  DashboardComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LAYOUT_ROUTING
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
