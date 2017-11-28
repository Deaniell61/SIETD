//importar los servicios nuevos
import { VertederosLegalesService } from './_services/vertederos-legales.service';
import { DrenajesanitarioService } from './_services/drenajesanitario.service';
import { BasurerosClandestinosService } from './_services/basureros-clandestinos.service';
import { PlantaTraAguaService } from './_services/planta-tra-agua.service';
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
import { BasurerosClandestinosComponent } from './basureros-clandestinos/basureros-clandestinos.component';
import { PlantaTraAguaComponent } from './planta-tra-agua/planta-tra-agua.component';
import { VertederosLegalesComponent } from './vertederos-legales/vertederos-legales.component';
import { LoadersCssModule } from 'angular2-loaders-css';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { DirectsComponent } from './directs/directs.component';
import { DrenajesanitarioComponent } from './drenajesanitario/drenajesanitario.component';

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
    BasurerosClandestinosComponent,
    PlantaTraAguaComponent,
    VertederosLegalesComponent,
    DirectsComponent,
    DrenajesanitarioComponent
  ],

  providers: [
    //importar los servicios nuevos
    VertederosLegalesService,
    DrenajesanitarioService,
    BasurerosClandestinosService,
    PlantaTraAguaService,
    //asta qui
  ],

  bootstrap: [NavComponent]
})
export class NavModule { }
