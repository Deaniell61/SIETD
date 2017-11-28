import { InfraestructuraComponent } from './infraestructura/infraestructura.component';
import { NivelProductivoComponent } from './nivel-productivo/nivel-productivo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from "./nav.component";
import { ChartsComponent } from "./charts/charts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TablesComponent } from "./tables/tables.component";
import { FilesComponent } from "./files/files.component";
import { DaniosPecuariosComponent } from "./danios-pecuarios/danios-pecuarios.component";
import { DaniosAgricolasComponent } from "./danios-agricolas/danios-agricolas.component";
import { DaniosInfraProdComponent } from "./danios-infra-prod/danios-infra-prod.component";

import { CultivosComponent } from "./cultivo/cultivo.component";
import { DetallesInfraestructurasComponent } from "./detalles-infraestructuras/detalles-infraestructuras.component";
import { FenomenoComponent } from "./fenomeno/fenomeno.component";
import { PecuarioComponent } from './pecuario/pecuario.component';
import { AnimalesComponent } from './animales/animales.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: NavComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'files', component: FilesComponent }
    ]},
    { path: 'agricolas', component: DaniosAgricolasComponent },
    { path: 'pecuarios', component: DaniosPecuariosComponent },
    { path: 'infraestructura', component: InfraestructuraComponent },
    { path: 'cultivo', component: CultivosComponent },
    { path: 'detalles-infraestructuras', component: DetallesInfraestructurasComponent },
    { path: 'fenomeno', component: FenomenoComponent },
    { path: 'pecuario', component: PecuarioComponent },
    { path: 'nivel-productivo', component: NivelProductivoComponent },
    { path: 'nivel-productivo', component: InfraestructuraComponent },
    { path: 'animales', component: AnimalesComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
