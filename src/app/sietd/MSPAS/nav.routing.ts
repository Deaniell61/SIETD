import { DetallecentrosanatorioComponent } from './detallecentrosanatorio/detallecentrosanatorio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from "./nav.component";
import { ChartsComponent } from "./charts/charts.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TablesComponent } from "./tables/tables.component";
import { FilesComponent } from "./files/files.component";
import { FamiliaComponent } from "./familia/familia.component";
import { AreaComponent } from "./area/area.component";
import { AcueductoComponent } from "./acueducto/acueducto.component";
//importar los servicios nuevos
import { TrenAseoComponent } from './tren-aseo/tren-aseo.component';
import { CentrosSanatariosComponent } from "./centros-sanatarios/centros-sanatarios.component";
//asta qui

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: NavComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'tables', component: TablesComponent },
      { path: 'files', component: FilesComponent }
    ]},
      { path: 'familia', component: FamiliaComponent },
      { path: 'area', component: AreaComponent },
      { path: 'acueducto', component: AcueductoComponent },
      //importar los servicios nuevos
      { path: 'tren-aseo', component: TrenAseoComponent },
      { path: 'centros-sanatarios', component: CentrosSanatariosComponent },
      { path: 'detallecentrosanatorio', component: DetallecentrosanatorioComponent },
      //asta qui
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule { }
