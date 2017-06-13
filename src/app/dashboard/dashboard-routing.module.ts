import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { OverviewComponent } from './components/overview/overview.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [],
    children: [
      {
        path: '',
        component: OverviewComponent,
        canActivate: [],
        data: { title: 'Dashboard' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
