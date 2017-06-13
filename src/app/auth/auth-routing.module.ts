import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './containers/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ResetComponent } from './components/reset/reset.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '', // Default route if not specified
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [],
        data: { title: 'Login' }
      },
      {
        path: 'account/recovery',
        component: ForgotComponent,
        canActivate: [],
        data: { title: 'Recover Account' }
      },
      {
        path: 'account/recovery/confirm',
        component: ResetComponent,
        canActivate: [], // Guaranteed to fail and route to login
        data: { title: 'Recover Account' }
      },
      {
        path: 'account/recovery/confirm/:token',
        component: ResetComponent,
        canActivate: [],
        data: { title: 'Recover Account' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
