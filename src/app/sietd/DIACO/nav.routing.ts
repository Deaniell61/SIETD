import { TipoServicioCombustibleComponent } from './tipo-servicio-combustible/tipo-servicio-combustible.component';
import { TipoCarneComponent } from './tipo-carne/tipo-carne.component';

import { DetalleGranosBasicosComponent } from './detalle-granos-basicos/detalle-granos-basicos.component';
import { DetalleVerduraComponent } from './detalle-verdura/detalle-verdura.component';
import { DetalleGasPropanoComponent } from './detalle-gas-propano/detalle-gas-propano.component';
import { DetalleCombustibleComponent } from './detalle-combustible/detalle-combustible.component';
import { DetalleCarnesComponent } from './detalle-carnes/detalle-carnes.component';
import { DetalleFrutasComponent } from './detalle-frutas/detalle-frutas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from "./nav.component";

import { ChartsComponent } from "./charts/charts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TablesComponent } from "./tables/tables.component";
import { FilesComponent } from "./files/files.component";

import { FrutaComponent } from "./fruta/fruta.component";
import { VerduraComponent } from "./verdura/verdura.component";
import { CarnesComponent } from "./carnes/carnes.component";
import { GranosBasicosComponent } from "./granos-basicos/granos-basicos.component";
import { GasPropanoComponent } from "./gas-propano/gas-propano.component";
import { CombustibleComponent } from "./combustible/combustible.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: NavComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'files', component: FilesComponent }
    ]},
  { path: 'frutas', component: FrutaComponent },
  { path: 'verduras', component: VerduraComponent },
  { path: 'granos_basicos', component: GranosBasicosComponent },
  { path: 'gas_propano', component: GasPropanoComponent },
  { path: 'carnes', component: CarnesComponent },
  { path: 'combustible', component: CombustibleComponent },
  { path: 'detalle_combustible', component: DetalleCombustibleComponent },
  { path: 'detalle_gas_propano', component: DetalleGasPropanoComponent },
  { path: 'detalle_verdura', component: DetalleVerduraComponent },
  { path: 'detalle_granos_basicos', component: DetalleGranosBasicosComponent },
  { path: 'tipo_carne', component: TipoCarneComponent },
  { path: 'tipo_servicio_combustible', component: TipoServicioCombustibleComponent },
  { path: 'detalle_carnes', component: DetalleCarnesComponent },
  { path: 'detalle_frutas', component: DetalleFrutasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
