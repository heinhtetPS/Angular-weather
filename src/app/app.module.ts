import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, Http } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherappComponent } from './weatherapp/weatherapp.component';
import { WeatherboxComponent } from './weatherbox/weatherbox.component';
import { WeatherdetailComponent } from './weatherdetail/weatherdetail.component';
import { AppRoutingModule } from './app-routing.module';
import { NoPage404Component } from './no-page404/no-page404.component';
import { GetWeatherService } from './get-weather.service';

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
    AppRoutingModule,
    HttpModule
  ],
  providers: [GetWeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
