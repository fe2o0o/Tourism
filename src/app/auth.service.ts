import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private _HttpClient: HttpClient) {
    if (localStorage.getItem('user') != null) {
      this.isLogin.next(true)
    } else {
      this.isLogin.next(false)
    }
   }
    isLogin = new BehaviorSubject(false);
   signUp(data:any): Observable<any>{
    return this._HttpClient.post('https://tourism-guide-duci.onrender.com/signup',data)
   }

    getUsers(): Observable<any>{
    return this._HttpClient.get('https://tourism-guide-duci.onrender.com/signup');
  }
}
