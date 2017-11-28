import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from "./nav.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChartsComponent } from "./charts/charts.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: NavComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'charts', component: ChartsComponent },
      { path: 'DIACO',loadChildren: 'app/sietd/DIACO/nav.module#NavModule'},
      { path: 'DIDEDUC',loadChildren: 'app/sietd/DIDEDUC/nav.module#NavModule'},
      { path: 'INAB',loadChildren: 'app/sietd/INAB/nav.module#NavModule'},
      { path: 'MAGA',loadChildren: 'app/sietd/MAGA/nav.module#NavModule'},
      { path: 'MARN',loadChildren: 'app/sietd/MARN/nav.module#NavModule'},
      { path: 'MIDES',loadChildren: 'app/sietd/MIDES/nav.module#NavModule'},
      { path: 'MSPAS',loadChildren: 'app/sietd/MSPAS/nav.module#NavModule'},
      { path: 'SESAN',loadChildren: 'app/sietd/SESAN/nav.module#NavModule'},
      { path: 'SOSEP',loadChildren: 'app/sietd/SOSEP/nav.module#NavModule'},      
      { path: 'ADMIN',loadChildren: 'app/sietd/ADMIN/nav.module#NavModule'},      
    ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SietdRoutingModule { }
