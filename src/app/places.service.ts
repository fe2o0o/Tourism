import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private _HttpClient:HttpClient) { }


  getPlacesByCity(city: string|null): Observable<any>{
    return this._HttpClient.get(`https://tourism-guide-duci.onrender.com/${city}`)
  }

}
