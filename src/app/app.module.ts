import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WeatherappComponent } from './weatherapp/weatherapp.component';
import { WeatherboxComponent } from './weatherbox/weatherbox.component';
import { WeatherdetailComponent } from './weatherdetail/weatherdetail.component';
import { AppRoutingModule } from './app-routing.module';
import { NoPage404Component } from './no-page404/no-page404.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherappComponent,
    WeatherboxComponent,
    WeatherdetailComponent,
    NoPage404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
