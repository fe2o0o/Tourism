import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesComponent } from './places/places.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  {path:"" , redirectTo:"ourPlaces" , pathMatch:"full"},
  { path: "ourPlaces", component: PlacesComponent },
  {path:"city/:id" , component:CityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourisPlacesRoutingModule { }
