import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from "./nav.component";
import { ChartsComponent } from "./charts/charts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TablesComponent } from "./tables/tables.component";
import { FilesComponent } from "./files/files.component";
import { VertederosLegalesComponent } from "./vertederos-legales/vertederos-legales.component";
import { BasurerosClandestinosComponent } from "./basureros-clandestinos/basureros-clandestinos.component";
import { PlantaTraAguaComponent } from "./planta-tra-agua/planta-tra-agua.component";
import { DrenajesanitarioComponent } from './drenajesanitario/drenajesanitario.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: NavComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'files', component: FilesComponent }
    ]},
    { path: 'basureros', component: BasurerosClandestinosComponent },
        { path: 'plantas-tratamiento', component: PlantaTraAguaComponent },
    { path: 'vertederos', component: VertederosLegalesComponent },
     //importar los servicios nuevos
    { path: 'vertederos-legales', component: VertederosLegalesComponent },
    { path: 'drenajesanitario', component: DrenajesanitarioComponent },
    { path: 'basureros-clandestinos', component: BasurerosClandestinosComponent },
    { path: 'planta-tra-agua', component: PlantaTraAguaComponent },
     //asta qui
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
