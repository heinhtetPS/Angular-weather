import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherappComponent } from './weatherapp/weatherapp.component';
import { WeatherdetailComponent } from './weatherdetail/weatherdetail.component';
import { NoPage404Component } from './no-page404/no-page404.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home', },
  { path: 'Home', component: WeatherappComponent },
  { path: 'details/:city', component: WeatherdetailComponent },
  { path: '**', component: NoPage404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }),
  ],
  exports: [RouterModule],
})


export class AppRoutingModule { }

export const routableComponents = [
  WeatherappComponent,
  WeatherdetailComponent
];
