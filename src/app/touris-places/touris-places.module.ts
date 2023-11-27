import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourisPlacesRoutingModule } from './touris-places-routing.module';
import { PlacesComponent } from './places/places.component';
import { CityComponent } from './city/city.component';


@NgModule({
  declarations: [
    PlacesComponent,
    CityComponent
  ],
  imports: [
    CommonModule,
    TourisPlacesRoutingModule
  ]
})
export class TourisPlacesModule { }
