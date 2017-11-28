import { ChartService } from './_services/chart.service';

import { DetallecentrosanatorioService } from './_services/detallecentrosanatorio.service';
import { FamiliaService } from './_services/familia.service';
import { AreaService } from './_services/area.service';
import { AcueductoService } from './_services/acueducto.service';
//importar los servicios nuevos
import { TrenAseoService } from './_services/tren-aseo.service';
import { CentrosSanatariosService } from './_services/centros-sanatarios.service';
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
import { LoadersCssModule } from 'angular2-loaders-css';

import { TablesComponent } from './tables/tables.component';
import { FilesComponent } from './files/files.component';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { DirectsComponent } from './directs/directs.component';
import { FamiliaComponent } from './familia/familia.component';
import { AreaComponent } from './area/area.component';
import { AcueductoComponent } from './acueducto/acueducto.component';
import { CentrosSanatariosComponent } from './centros-sanatarios/centros-sanatarios.component';
import { TrenAseoComponent } from './tren-aseo/tren-aseo.component';
import { DetallecentrosanatorioComponent } from './detallecentrosanatorio/detallecentrosanatorio.component';

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
    LoaderComponent,
    TablesComponent,
    FilesComponent,
    DirectsComponent,
    FamiliaComponent,
    AreaComponent,
    AcueductoComponent,
    CentrosSanatariosComponent,
    TrenAseoComponent,
    DetallecentrosanatorioComponent,
  ],

  providers: [
    FamiliaService,
    AreaService,
    AcueductoService,
    //importar los servicios nuevos
    TrenAseoService,
    CentrosSanatariosService,
    DetallecentrosanatorioService,
    //asta qui
    ChartService
  ],

  bootstrap: [NavComponent]
})
export class NavModule { }
