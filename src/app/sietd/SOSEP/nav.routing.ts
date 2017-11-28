import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from "./nav.component";
import { ChartsComponent } from "./charts/charts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TablesComponent } from "./tables/tables.component";
import { FilesComponent } from "./files/files.component";
import { CreciendoseguroComponent } from "./creciendoseguro/creciendoseguro.component";
import { HogarescomunitariosComponent } from "./hogarescomunitarios/hogarescomunitarios.component";
import { MisAniosDoradosComponent } from "./mis-anios-dorados/mis-anios-dorados.component";
import { ServicioSocialComponent } from "./servicio-social/servicio-social.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: NavComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'files', component: FilesComponent }
    ]},
    { path: 'creciendoseguro', component: CreciendoseguroComponent },
    { path: 'hogarescomunitarios', component: HogarescomunitariosComponent },
    { path: 'anios-dorados', component: MisAniosDoradosComponent },
    { path: 'servicio-social', component: ServicioSocialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
