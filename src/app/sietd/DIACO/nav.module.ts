import { CombustibleService } from './_services/combustible.service';
import { GranoBasicoService } from './_services/grano-basico.service';
import { TipoServicioCombustibleService } from './_services/tipo-servicio-combustible.service';
import { TipoCarneService } from './_services/tipo-carne.service';
import { DetalleGranoBasicoService } from './_services/detalle-grano-basico.service';
import { DetalleVerduraService } from './_services/detalle-verdura.service';
import { DetalleGasPropanoService } from './_services/detalle-gas-propano.service';
import { DetalleCombustibleService } from './_services/detalle-combustible.service';
import { DetalleCarnesService } from './_services/detalle-carnes.service';
import { DetalleFrutasService } from './_services/detalle-frutas.service';
import { VerduraService } from './_services/verdura.service';
import { GasPropanoService } from './_services/gas-propano.service';
import { FrutaService } from './_services/fruta.service';
import { CarneService } from './_services/carne.service';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { NavRoutingModule } from './nav.routing';
import { NavComponent } from "./nav.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChartsComponent } from "./charts/charts.component";

import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';
import { LoaderComponent } from "./loader/loader.component";
import { TablesComponent } from './tables/tables.component';
import { FilesComponent } from './files/files.component';
import { VerduraComponent } from './verdura/verdura.component';
import { FrutaComponent } from './fruta/fruta.component';
import { CarnesComponent } from './carnes/carnes.component';
import { GranosBasicosComponent } from './granos-basicos/granos-basicos.component';
import { GasPropanoComponent } from './gas-propano/gas-propano.component';
import { CombustibleComponent } from './combustible/combustible.component';
import { DetalleVerduraComponent } from './detalle-verdura/detalle-verdura.component';
import { DetalleGranosBasicosComponent } from './detalle-granos-basicos/detalle-granos-basicos.component';
import { DetalleGasPropanoComponent } from './detalle-gas-propano/detalle-gas-propano.component';
import { DetalleCombustibleComponent } from './detalle-combustible/detalle-combustible.component';
import { TipoCarneComponent } from './tipo-carne/tipo-carne.component';
import { TipoServicioCombustibleComponent } from './tipo-servicio-combustible/tipo-servicio-combustible.component';



import { LoadersCssModule } from 'angular2-loaders-css';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { DirectsComponent } from './directs/directs.component';
import { DetalleCarnesComponent } from './detalle-carnes/detalle-carnes.component';
import { DetalleFrutasComponent } from './detalle-frutas/detalle-frutas.component';

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
    VerduraComponent,
    FrutaComponent,
    CarnesComponent,
    GranosBasicosComponent,
    GasPropanoComponent,
    CombustibleComponent,
    DetalleCombustibleComponent,
    DetalleGasPropanoComponent,
    DetalleGranosBasicosComponent,
    DetalleVerduraComponent,
    LoaderComponent,
    DirectsComponent,
    TipoCarneComponent,
    TipoServicioCombustibleComponent,
    DetalleCarnesComponent,
    DetalleFrutasComponent,
  ],
  providers: [
    CarneService,
    FrutaService,
    GasPropanoService,
    VerduraService,
    GranoBasicoService,
    DetalleCombustibleService,
    DetalleGasPropanoService,
    DetalleVerduraService,
    DetalleGranoBasicoService,
    TipoCarneService,
    TipoServicioCombustibleService,
    CombustibleService,
    DetalleCarnesService,
    DetalleFrutasService
  ],
  bootstrap: [NavComponent]
})
export class NavModule { }
