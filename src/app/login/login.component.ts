import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService:AuthService ,private _Router:Router){}
  login: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password : new FormControl(null , [Validators.required])
  })


    ngOnInit(): void {
    this._AuthService.getUsers().subscribe({
      next: (res) => {
        this.users = res;
      }
    })
  }

  messageError: string = "";
 users: any[]=[];
   handleLogin(login: FormGroup) {
    const user = this.users.filter((e) => {
      return e.email == login.value.email && e.password == login.value.password;
    })

    if (user.length !== 0) {
      localStorage.setItem('user', JSON.stringify(user));
      this._AuthService.isLogin.next(true);
      this._Router.navigate(['/home']);
    }
    else {
      this.messageError = "خطأ في الايميل او الباسورد";
    }
  }
}
