import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from "./nav.component";
import { ChartsComponent } from "./charts/charts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TablesComponent } from "./tables/tables.component";
import { FilesComponent } from "./files/files.component";

//importar los servicios nuevos
import { DetalleinabComponent } from './detalleinab/detalleinab.component';
import { ConsumoleniaComponent } from './consumolenia/consumolenia.component';
import { ProgramainabComponent } from './programainab/programainab.component';
//asta qui

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: NavComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'files', component: FilesComponent }
    ]},

    //importar los servicios nuevos
    { path: 'detalleinab', component: DetalleinabComponent },
    { path: 'consumolenia', component: ConsumoleniaComponent },
    { path: 'programainab', component: ProgramainabComponent },
    //asta qui
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
