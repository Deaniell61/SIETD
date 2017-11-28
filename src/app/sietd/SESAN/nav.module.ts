import { VisitasdomicilioService } from './_services/visitasdomicilio.service';
import { AsistenciaalimentariaService } from './_services/asistenciaalimentaria.service';
import { NiniosRecuperadosService } from './_services/ninios-recuperados.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { NavRoutingModule } from './nav.routing';
import { NavComponent } from "./nav.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChartsComponent } from "./charts/charts.component";
import { LoaderComponent } from "./loader/loader.component";

import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';

import { TablesComponent } from './tables/tables.component';
import { FilesComponent } from './files/files.component';
import { AccionesControladasComponent } from './acciones-controladas/acciones-controladas.component';
import { LoadersCssModule } from 'angular2-loaders-css';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { DirectsComponent } from './directs/directs.component';
import { VisitasdomicilioComponent } from './visitasdomicilio/visitasdomicilio.component';
import { AsistenciaalimentariaComponent } from './asistenciaalimentaria/asistenciaalimentaria.component';
import { NiniosRecuperadosComponent } from './ninios-recuperados/ninios-recuperados.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    LoadersCssModule,
    DataTablesModule,
    SimpleNotificationsModule.forRoot(),
    NavRoutingModule
    
  ],
  declarations: [
    NavComponent,
    DashboardComponent,
    ChartsComponent,
    TablesComponent,
    FilesComponent,
    AccionesControladasComponent,
    LoaderComponent,
    DirectsComponent,
    VisitasdomicilioComponent,
    AsistenciaalimentariaComponent,
    NiniosRecuperadosComponent
  ],

  providers: [
    //importar los servicios nuevos
    AsistenciaalimentariaService,
    VisitasdomicilioService,
    NiniosRecuperadosService
    //asta qui
  ],

  bootstrap: [NavComponent]
})
export class NavModule { }
