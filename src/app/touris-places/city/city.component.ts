import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/places.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent  implements OnInit{
  constructor(private _ToastrService:ToastrService,private _PlacesService:PlacesService , private _ActivatedRoute:ActivatedRoute){}
  city: string | null = '';
  book: boolean = false;
  userData: any;
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

    if (localStorage.getItem('user') != null) {
      this.userData=JSON.parse(`${localStorage.getItem('user')}`)[0]
    }
  }


  handleBook() {
    this._ToastrService.success('تم تأكيد الحجز', 'عمليه ناجحه');
    this.book = false;
  }
}
