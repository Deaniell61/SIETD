import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from "./nav.component";
import { ChartsComponent } from "./charts/charts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TablesComponent } from "./tables/tables.component";
import { FilesComponent } from "./files/files.component";
import { BecaEducacionMediaComponent } from "./beca-educacion-media/beca-educacion-media.component";
import { BecaEducacionSuperiorComponent } from "./beca-educacion-superior/beca-educacion-superior.component";
import { BonoSeguroComponent } from "./bono-seguro/bono-seguro.component";
import { ProgramamidesComponent } from "./programamides/programamides.component";
import { DetallemidesComponent } from "./detallemides/detallemides.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: NavComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'files', component: FilesComponent }
    ]},
    { path: 'educacion-media', component: BecaEducacionMediaComponent },
    { path: 'educacion-superior', component: BecaEducacionSuperiorComponent },
    { path: 'bono-seguro', component: BonoSeguroComponent },
    { path: 'programamides', component: ProgramamidesComponent },
    { path: 'detallemides', component: DetallemidesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
