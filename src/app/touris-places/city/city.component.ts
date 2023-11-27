import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/places.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent  implements OnInit{
  constructor(private _PlacesService:PlacesService , private _ActivatedRoute:ActivatedRoute){}
  city: string | null = '';
  places: any[] = [];
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (res) => {
        console.log();
        this.city = res.get('id');
        }
    })

    this._PlacesService.getPlacesByCity(this.city).subscribe({
      next: (res) => {
        this.places=res
      }
    })
  }
}
