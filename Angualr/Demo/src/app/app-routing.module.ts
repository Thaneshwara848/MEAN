import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { GalaryComponent } from './galary/galary.component';

const routes: Routes = [
  {
    path:'pizza',component:LoginComponent
  },
  {
  path:'burger',component:SignupComponent
},
{
  path:'biriyani',component:GalaryComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
