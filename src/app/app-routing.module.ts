import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherappComponent } from './weatherapp/weatherapp.component';
import { WeatherdetailComponent } from './weatherdetail/weatherdetail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home', },
  { path: 'Home', component: WeatherappComponent },
  { path: 'details/:city', component: WeatherdetailComponent },
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
