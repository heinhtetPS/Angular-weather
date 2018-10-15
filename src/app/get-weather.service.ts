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
    // let data: {info: string} = {info: ''};
    const appID: string = '&appid=df00cda1893df4914640c19962cd1427';
    const fullURL: string = staticURL + query + appID;

    // make model first
    return this.http.get(fullURL);
    // .subscribe(response => {
    //   data.info = response.json();
    //   return data.info;
    //   // this is working here
    //   // console.log(data.info);
    // },
    // error => {
    //   console.log(error);
    // });
  }
}
