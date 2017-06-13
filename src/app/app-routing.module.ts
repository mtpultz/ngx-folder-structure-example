import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    // Always attempt to redirect to the default authenticated route, and let the
    // AuthGuard determine if the user is authenticated, and handle routing
    // users who need to authenticate to login
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

