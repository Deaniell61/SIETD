import { ProgramamidesService } from './_services/programamides.service';
import { DetallemidesService } from './_services/detallemides.service'; 

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
import { BonoSeguroComponent } from './bono-seguro/bono-seguro.component';
import { BecaEducacionMediaComponent } from './beca-educacion-media/beca-educacion-media.component';
import { BecaEducacionSuperiorComponent } from './beca-educacion-superior/beca-educacion-superior.component';
import { LoadersCssModule } from 'angular2-loaders-css';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { DirectsComponent } from './directs/directs.component';
import { ProgramamidesComponent } from './programamides/programamides.component';
import { DetallemidesComponent } from './detallemides/detallemides.component';

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
    LoaderComponent,
    BonoSeguroComponent,
    BecaEducacionMediaComponent,
    BecaEducacionSuperiorComponent,
    DirectsComponent,
    ProgramamidesComponent,
    DetallemidesComponent,
  ],

  providers: [
    ProgramamidesService,
    DetallemidesService,
  ],

  bootstrap: [NavComponent]
})
export class NavModule { }
