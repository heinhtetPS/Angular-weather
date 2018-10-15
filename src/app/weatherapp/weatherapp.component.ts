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

   getWeather(query: string, target: number) {
     let currentWeather = new CityWeather();
     currentWeather.id = target;
     currentWeather.name = query;
    this.getWeatherService.getWeather('?q=brooklyn,us').subscribe(
      data => { currentWeather.info = data; },
      err => console.error(err),
      () => console.log('retrieved city data: ' + currentWeather.info)
    );
    console.log(this.cities[0]);
   }

  ngOnInit() {
    this.getWeather('?q=brooklyn,us', 0);
    // this.getWeather('?q=framingham');
    // this.getWeather('?q=redlands');
    // this.getWeather('?q=nagoya');
    // this.getWeather('?q=yangon');
  }

}
