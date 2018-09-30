import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';
import { CityWeather } from '../city-weather';

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.css']
})
export class WeatherappComponent implements OnInit {

  private cities: CityWeather[];

  constructor(private getWeatherService: GetWeatherService) {

   }

   getWeather(query: string) {
     const staticURL = 'http://api.openweathermap.org/data/2.5/weather';
     const appID = '&appid=df00cda1893df4914640c19962cd1427';
    console.log(staticURL + query + appID);
    
   }

  ngOnInit() {
    this.getWeather('?q=brooklyn,us');
    this.getWeather('?q=framingham');
    this.getWeather('?q=redlands');
    this.getWeather('?q=nagoya');
    this.getWeather('?q=yangon');
  }

}
