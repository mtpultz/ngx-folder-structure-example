import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../containers/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PasswordComponent } from './components/password/password.component';

const routes: Routes = [
  {
    path: 'user',
    component: DashboardComponent,
    canActivate: [],
    children: [
      {
        path: '', // Default route if not specified
        redirectTo: 'profile',
        pathMatch: 'full'
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [],
        canDeactivate: [],
        data: { title: 'Profile' }
      },
      {
        path: 'password',
        component: PasswordComponent,
        canActivate: [],
        data: { title: 'Change Password' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
