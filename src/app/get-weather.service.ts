import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor(private http: Http) { }

  getWeather(query: string) {
    const staticURL = 'http://api.openweathermap.org/data/2.5/weather';
    let data: {info: string} = {info: ''};
    let appID: string = '&appid=df00cda1893df4914640c19962cd1427';
    let fullURL: string = staticURL + query + appID;

    // make model first
    // return this.http.get(fullURL)
    // .subscribe(response => {
    //   return response.json();
    // })
    // .catch(err => {
    //   console.log(err);
    //   return Observable.of(null);
    // });
  }
}
