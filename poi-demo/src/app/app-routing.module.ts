import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './poi/about/about.component';
import { LocationsComponent } from './poi/locations/locations.component';
import { RegisterComponent } from './poi/register/register.component';
import { LoginComponent } from './poi/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LocationsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
