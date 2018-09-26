import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { WeatherappComponent } from './weatherapp/weatherapp.component';
import { WeatherboxComponent } from './weatherbox/weatherbox.component';
import { WeatherdetailComponent } from './weatherdetail/weatherdetail.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherappComponent,
    WeatherboxComponent,
    WeatherdetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
