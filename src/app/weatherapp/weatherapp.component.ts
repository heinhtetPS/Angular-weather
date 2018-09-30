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
    console.log(query);
    
   }

  ngOnInit() {
    this.getWeather('?q=brooklyn,us', this.cities);
    this.getWeather('?q=framingham', this.cities);
    this.getWeather('?q=redlands', this.cities);
    this.getWeather('?q=nagoya', this.cities);
    this.getWeather('?q=yangon', this.cities);
  }

}
