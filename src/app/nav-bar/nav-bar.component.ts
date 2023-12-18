import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
    constructor(private _AuthService:AuthService , private _Router:Router) {
    _AuthService.isLogin.subscribe({
      next: () => {
        if (_AuthService.isLogin.getValue() == false) {
          this.isLogged = false;
        } else {
          this.isLogged = true;
        }
      }
    })

  }

  isLogged: boolean = false;

  logOut() {
    this._AuthService.isLogin.next(false);
    this._Router.navigate(['/login']);
    localStorage.clear();
  }
}
