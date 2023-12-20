import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { TourisPlacesRoutingModule } from './touris-places-routing.module';
import { PlacesComponent } from './places/places.component';
import { CityComponent } from './city/city.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PlacesComponent,
    CityComponent
  ],
  imports: [
    CommonModule,
    TourisPlacesRoutingModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TourisPlacesModule { }
