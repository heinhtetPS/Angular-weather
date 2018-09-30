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

   getWeather(query: string, target: CityWeather) {

   }

  ngOnInit() {
    this.getWeather('?q=brooklyn,us', this.cities[0]);
    this.getWeather('?q=framingham', this.cities[1]);
    this.getWeather('?q=redlands', this.cities[2]);
    this.getWeather('?q=nagoya', this.cities[3]);
    this.getWeather('?q=yangon', this.cities[4]);
  }

}
