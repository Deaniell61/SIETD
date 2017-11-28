import { DepartamentosService } from './sietd/ADMIN/_services/departamentos.service';
import { MunicipiosService } from './sietd/ADMIN/_services/municipios.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from "./app.routing";

import { AuthGuard } from "./_guards/auth.guard";
import { HomeGuard } from "./_guards/home.guard";

import { AuthService } from "./_services/auth.service";
import { LoaderComponent } from "./loader/loader.component";
import { SimpleNotificationsModule } from 'angular2-notifications';
import { LoadersCssModule } from 'angular2-loaders-css';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LoadersCssModule,
    HttpModule,
    AppRoutingModule,
    SimpleNotificationsModule.forRoot()
    
  ],
  providers: [
    AuthGuard,
    HomeGuard,
    AuthService,
    MunicipiosService,
    DepartamentosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
