import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { OverviewComponent } from './components/overview/overview.component';
import { OfficeEditComponent } from './organization/offices/office-edit/office-edit.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    OverviewComponent,
    OfficeEditComponent
  ]
})
export class DashboardModule { }
