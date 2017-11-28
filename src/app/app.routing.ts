import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from "./sietd/nav.component";
import { LoginComponent } from './login/login.component';

import { AuthGuard } from "./_guards/auth.guard";
import { HomeGuard } from "./_guards/home.guard";

const routes: Routes = [
  { path: '', redirectTo: 'sietd', pathMatch: 'full' },
  { path: 'sietd',loadChildren: 'app/sietd/sietd.module#SietdModule', canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [HomeGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
