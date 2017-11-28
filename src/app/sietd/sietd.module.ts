
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { SietdRoutingModule } from './sietd.routing';
import { NavComponent } from "./nav.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ChartsComponent } from "./charts/charts.component";
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SietdRoutingModule,
    ChartsModule
  ],
  declarations: [
    NavComponent,
    DashboardComponent,
    ChartsComponent,
  ],
  bootstrap: [NavComponent]
})
export class SietdModule { }
