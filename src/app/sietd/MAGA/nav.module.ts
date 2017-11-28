import { InfraestructuraComponent } from './infraestructura/infraestructura.component';

import { InfraestructuraService } from './_services/infraestructura.service';
import { NivelProductivoComponent } from './nivel-productivo/nivel-productivo.component';
import { DepartamentosService } from './../ADMIN/_services/departamentos.service';
import { MunicipiosService } from './../ADMIN/_services/municipios.service';
import { NivelProductivoFamiliaService } from './_services/nivel-productivo-familia.service';
import { AnimalesService } from './_services/animales.service';
import { CultivoService } from './_services/cultivo.service';
import { DetalleInfraestructuraService } from './_services/detalle-infraestructura.service';
import { FenomenoService } from './_services/fenomeno.service';
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
import { DaniosAgricolasComponent } from './danios-agricolas/danios-agricolas.component';
import { DaniosPecuariosComponent } from './danios-pecuarios/danios-pecuarios.component';
import { DaniosInfraProdComponent } from './danios-infra-prod/danios-infra-prod.component';
import { LoadersCssModule } from 'angular2-loaders-css';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { DirectsComponent } from './directs/directs.component';
import { CultivosComponent } from './cultivo/cultivo.component';
import { DetallesInfraestructurasComponent } from './detalles-infraestructuras/detalles-infraestructuras.component';
import { FenomenoComponent } from './fenomeno/fenomeno.component';
import { PecuarioComponent } from './pecuario/pecuario.component';
import { PecuarioService } from './_services/pecuario.service';
import { DaniosAgricolasService } from './_services/danios-agricolas.service';
import { ChartService } from './_services/chart.service';
import { AnimalesComponent } from './animales/animales.component';

import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,    
    ChartsModule,
    LoadersCssModule,
    DataTablesModule,
    FileUploadModule,
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
    DaniosAgricolasComponent,
    DaniosPecuariosComponent,
    DaniosInfraProdComponent,
    DirectsComponent,
    CultivosComponent,
    DetallesInfraestructurasComponent,
    FenomenoComponent,
    PecuarioComponent, 
    NivelProductivoComponent,
    InfraestructuraComponent,
    AnimalesComponent
  ],

  providers: [
    CultivoService,
    DetalleInfraestructuraService,
    FenomenoService,
    PecuarioService, 
    AnimalesService, 
    NivelProductivoFamiliaService, 
    MunicipiosService, 
    DepartamentosService,
    InfraestructuraService,
    DaniosAgricolasService,
    ChartService
  ],

  bootstrap: [NavComponent]
})
export class NavModule { }
