
import { AulaComponent } from './aula/aula.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from "./nav.component";
import { ChartsComponent } from "./charts/charts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TablesComponent } from "./tables/tables.component";
import { FilesComponent } from "./files/files.component";
import { EstablecimientosComponent } from "./establecimientos/establecimientos.component";
import { TipoEstablecimientoComponent } from "./tipo-establecimiento/tipo-establecimiento.component";
import { NivelEducativoComponent } from "./nivel-educativo/nivel-educativo.component";
import { TipoMobiliarioComponent } from "./tipo-mobiliario/tipo-mobiliario.component";
import { TipoAulaComponent } from "./tipo-aula/tipo-aula.component";
import { TipoDanioComponent } from "./tipo-danio/tipo-danio.component";
import { MobiliarioComponent } from "./mobiliario/mobiliario.component";
import { DanioComponent } from "./danio/danio.component";
import { EdificioComponent } from "./edificio/edificio.component";


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: NavComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'files', component: FilesComponent }
    ]},
    { path: 'establecimientos', component: EstablecimientosComponent },
    { path: 'tipos-establecimientos', component: TipoEstablecimientoComponent },
    { path: 'niveles-educativos', component: NivelEducativoComponent },
    { path: 'tipo-mobiliario', component: TipoMobiliarioComponent },
    { path: 'tipo-danio', component: TipoDanioComponent },
    { path: 'tipo-aula', component: TipoAulaComponent },
    { path: 'mobiliario', component: MobiliarioComponent },
    { path: 'danio', component: DanioComponent },
    { path: 'edificios', component: EdificioComponent },
    { path: 'aula', component: AulaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
