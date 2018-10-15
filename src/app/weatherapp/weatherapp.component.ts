import { Component, OnInit } from '@angular/core';
import { GetWeatherService } from '../get-weather.service';
import { CityWeather } from '../city-weather';

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.css']
})
export class WeatherappComponent implements OnInit {

  private cities: Array<CityWeather>;

  constructor(private getWeatherService: GetWeatherService) {
      this.cities = [];
   }

   getWeather(query: string, target: number) {
     let currentWeather = new CityWeather();
     let realQuery = '?q=' + query;
     currentWeather.id = target;
     currentWeather.name = query;
    this.getWeatherService.getWeather(realQuery).subscribe(
      data => {
        currentWeather.info = data.json();
        this.cities.push(currentWeather);
        console.log(this.cities);
      },
      err => console.error(err),
    );
   }

  ngOnInit() {
    this.getWeather('brooklyn,us', 0);
    this.getWeather('framingham', 1);
    this.getWeather('redlands', 2);
    this.getWeather('nagoya', 3);
    this.getWeather('yangon', 4);
  }

}
