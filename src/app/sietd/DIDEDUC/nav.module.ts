import { ChartService } from './_services/chart.service';

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
import { EstablecimientosComponent } from './establecimientos/establecimientos.component';
import { LoadersCssModule } from 'angular2-loaders-css';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { NivelEducativoComponent } from './nivel-educativo/nivel-educativo.component';
import { TipoEstablecimientoComponent } from './tipo-establecimiento/tipo-establecimiento.component';
import { DirectsComponent } from './directs/directs.component';

import { TipoEstablecimientoService } from "./_services/tipo-establecimiento.service";
import { EstablecimientoService } from "./_services/establecimiento.service";
import { NivelEducativoService } from "./_services/nivel-educativo.service";
import { TipoMobiliarioService } from "./_services/tipo-mobiliario.service";
import { TipoDanioService } from "./_services/tipo-danio.service";
import { TipoAulaService } from "./_services/tipo-aula.service";
import { MobiliarioService } from "./_services/mobiliario.service";
import { EdificioService } from "./_services/edificio.service";
import { DanioService } from "./_services/danio.service";
import { MobiliarioComponent } from './mobiliario/mobiliario.component';
import { TipoMobiliarioComponent } from './tipo-mobiliario/tipo-mobiliario.component';
import { TipoDanioComponent } from './tipo-danio/tipo-danio.component';
import { TipoAulaComponent } from './tipo-aula/tipo-aula.component';
import { DanioComponent } from './danio/danio.component';
import { EdificioComponent } from './edificio/edificio.component';
import { AulaComponent } from './aula/aula.component';
import { AulaService} from  "./_services/aula.service";

import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,    
    ChartsModule,
    FileUploadModule,
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
    EstablecimientosComponent,
    LoaderComponent,
    NivelEducativoComponent,
    TipoEstablecimientoComponent,
    DirectsComponent,
    MobiliarioComponent,
    TipoMobiliarioComponent,
    TipoDanioComponent,
    TipoAulaComponent,
    DanioComponent,
    EdificioComponent,
    AulaComponent,
  ],
  providers: [
    TipoEstablecimientoService,
    EstablecimientoService,
    NivelEducativoService,
    TipoMobiliarioService,
    MobiliarioService,
    TipoAulaService,
    TipoDanioService,
    DanioService,
    EdificioService,
    AulaService,
    ChartService
  ],
  bootstrap: [NavComponent]
})
export class NavModule { }
