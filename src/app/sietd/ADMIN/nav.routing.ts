import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from "./nav.component";

import { ChartsComponent } from "./charts/charts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { MunicipiosComponent } from './municipios/municipios.component';

const routes: Routes = [
  { path: '', component: NavComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'departamentos', component: DepartamentosComponent },
      { path: 'municipios', component: MunicipiosComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
