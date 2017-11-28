import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";

import { NavRoutingModule } from './nav.routing';
import { NavComponent } from "./nav.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChartsComponent } from "./charts/charts.component";

import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';
import { LoaderComponent } from './loader/loader.component';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { UsuariosService } from "./_services/usuarios.service";
import { EntidadesService } from "./_services/entidades.service";
import { DepartamentosService } from "./_services/departamentos.service";
import { MunicipiosService } from "./_services/municipios.service";
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { MunicipiosComponent } from './municipios/municipios.component';
import { LoadersCssModule } from 'angular2-loaders-css';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    ChartsModule,
    DataTablesModule,
    LoadersCssModule,
    SimpleNotificationsModule.forRoot(),
    NavRoutingModule
  ],
  declarations: [
    NavComponent,
    DashboardComponent,
    ChartsComponent,
    UsuariosComponent,
    DepartamentosComponent,
    LoaderComponent,
    MunicipiosComponent
  ],
  providers: [
    UsuariosService,
    DepartamentosService,
    MunicipiosService,
    EntidadesService
  ],
  bootstrap: [NavComponent]
})
export class NavModule { }
