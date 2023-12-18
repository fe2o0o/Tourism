import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _ToastrService:ToastrService,private _Router:Router,private _AuthService:AuthService){}
  register: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password : new FormControl(null , [Validators.required])
  })


    handleRegister(form: FormGroup) {
    this._AuthService.signUp(form.value).subscribe({
      next: (res) => {
        this._Router.navigate(['/login']);
        this._ToastrService.success('Registred Confirm', 'Success');
      }
    })
  }
}
