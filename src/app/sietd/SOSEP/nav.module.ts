import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
//copiar los import que esta aca para el nuevo
import { CreciendoseguroService } from './_services/creciendoseguro.service';
import { HogarescomunitariosService } from './_services/hogarescomunitarios.service';
import { MisAniosDoradosService } from './_services/mis-anios-dorados.service';
import { ServicioSocialService } from './_services/servicio-social.service';
// hasta aqui


import { NavRoutingModule } from './nav.routing';
import { NavComponent } from "./nav.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChartsComponent } from "./charts/charts.component";
import { LoaderComponent } from "./loader/loader.component";

import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';

import { TablesComponent } from './tables/tables.component';
import { FilesComponent } from './files/files.component';
import { HogarescomunitariosComponent } from './hogarescomunitarios/hogarescomunitarios.component';
import { CreciendoseguroComponent } from './creciendoseguro/creciendoseguro.component';
import { MisAniosDoradosComponent } from './mis-anios-dorados/mis-anios-dorados.component';
import { ServicioSocialComponent } from './servicio-social/servicio-social.component';
import { LoadersCssModule } from 'angular2-loaders-css';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { DirectsComponent } from './directs/directs.component';


@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    DataTablesModule,
    LoadersCssModule,
    SimpleNotificationsModule.forRoot(),
    NavRoutingModule,
    FormsModule,
  ],
  declarations: [
    NavComponent,
    DashboardComponent,
    ChartsComponent,
    TablesComponent,
    FilesComponent,
   
    MisAniosDoradosComponent,
    LoaderComponent,
    ServicioSocialComponent,
    DirectsComponent,
    CreciendoseguroComponent,
    HogarescomunitariosComponent
  ],
  providers:[
    //copiar los import que esta aca para el nuevo
    CreciendoseguroService,
    HogarescomunitariosService,
    MisAniosDoradosService,
    ServicioSocialService
// hasta aqui
  ],
  bootstrap: [NavComponent]
})
export class NavModule { }
