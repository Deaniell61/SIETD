//importar los servicios nuevos
import { DetalleinabService } from './_services/detalleinab.service';
import { ConsumoleniaService } from './_services/consumolenia.service';
import { ProgramainabService } from './_services/programainab.service';
//asta qui

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
import { LoadersCssModule } from 'angular2-loaders-css';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { DirectsComponent } from './directs/directs.component';
import { ConsumoleniaComponent } from './consumolenia/consumolenia.component';
import { DetalleinabComponent } from './detalleinab/detalleinab.component';
import { ProgramainabComponent } from './programainab/programainab.component';

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
    LoaderComponent,
    ChartsComponent,
    TablesComponent,
    FilesComponent,
    DirectsComponent,
    ConsumoleniaComponent,
    DetalleinabComponent,
    ProgramainabComponent
  ],

  providers: [
    //importar los servicios nuevos
    DetalleinabService,
    ConsumoleniaService,
    ProgramainabService,
    //asta qui
  ],

  bootstrap: [NavComponent]
})
export class NavModule { }
