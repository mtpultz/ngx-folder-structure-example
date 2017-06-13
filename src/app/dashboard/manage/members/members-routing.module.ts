import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../../containers/dashboard/dashboard.component';
import { MemberListComponent } from '../members/components/member-list/member-list.component';
import { MemberEditComponent } from '../members/components/member-edit/member-edit.component';

const routes: Routes = [
  {
    path: 'members',
    component: DashboardComponent,
    canActivate: [],
    children: [
      {
        path: '',
        component: MemberListComponent,
        canActivate: [],
        data: { title: 'Members' }
      },
      {
        path: 'add',
        component: MemberEditComponent,
        canActivate: [],
        canDeactivate: [],
        data: { title: 'Add Member' }
      },
      {
        path: ':id/edit',
        component: MemberEditComponent,
        canActivate: [],
        canDeactivate: [],
        data: { title: 'Edit Member' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
