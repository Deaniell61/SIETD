import { VisitasdomicilioComponent } from './visitasdomicilio/visitasdomicilio.component';
import { AsistenciaalimentariaComponent } from './asistenciaalimentaria/asistenciaalimentaria.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from "./nav.component";
import { ChartsComponent } from "./charts/charts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TablesComponent } from "./tables/tables.component";
import { FilesComponent } from "./files/files.component";
import { AccionesControladasComponent } from "./acciones-controladas/acciones-controladas.component";
import { NiniosRecuperadosComponent } from "./ninios-recuperados/ninios-recuperados.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: NavComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'files', component: FilesComponent }
    ]},
    { path: 'acciones', component: AccionesControladasComponent },
    { path: 'visitasdomicilio', component: VisitasdomicilioComponent },
    { path: 'asistenciaalimentaria', component: AsistenciaalimentariaComponent },
    { path: 'ninios-recuperados', component: NiniosRecuperadosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
