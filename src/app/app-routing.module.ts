import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contactUs", component: ContactUsComponent },
  { path: "login", component: LoginComponent },
  {path: "register",component:RegisterComponent},
  {path:"places" , loadChildren:()=> import('./touris-places/touris-places.module').then((m)=> m.TourisPlacesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
