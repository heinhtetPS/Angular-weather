import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';
import { CityWeather } from '../city-weather';

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.css']
})
export class WeatherappComponent implements OnInit {

  private cities = [];

  constructor(private getWeatherService: GetWeatherService) {

   }

   getWeather(query: string) {
    this.cities.push(this.getWeatherService.getWeather('?q=brooklyn,us'));
    console.log(this.cities[0]);
   }

  ngOnInit() {
    this.getWeather('?q=brooklyn,us');
    // this.getWeather('?q=framingham');
    // this.getWeather('?q=redlands');
    // this.getWeather('?q=nagoya');
    // this.getWeather('?q=yangon');
  }

}
