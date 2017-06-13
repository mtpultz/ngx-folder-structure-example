import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../../containers/dashboard/dashboard.component';
import { OfficeListComponent } from '../offices/components/office-list/office-list.component';
import { OfficeEditComponent } from '../offices/components/office-edit/office-edit.component';

const routes: Routes = [
  {
    path: 'offices',
    component: DashboardComponent,
    canActivate: [],
    children: [
      {
        path: '',
        component: OfficeListComponent,
        canActivate: [],
        data: { title: 'Offices' }
      },
      {
        path: 'add',
        component: OfficeEditComponent,
        canActivate: [],
        canDeactivate: [],
        data: { title: 'Add Office' }
      },
      {
        path: ':id/edit',
        component: OfficeEditComponent,
        canActivate: [],
        canDeactivate: [],
        data: { title: 'Edit Office' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficesRoutingModule { }
