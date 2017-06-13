import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

// Packages
// import { TokenService } from '../token.service';

@Component({
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {

  constructor(
    private location: Location,
    private router: Router,
    // private tokenService: TokenService
  ) { }

  public goBack() {
    this.location.back();
  }

  public redirect() {
    // const user = this.tokenService.decodeToken().user;

    // // Super admins don't have access to the IRC form list so and infinite route
    // // loop occurs unless a specific default is applied for super admins to the
    // // members list
    // if (user.role === 'super_admin') {
    //   this.router.navigate(['members']);
    // } else {
    //   this.router.navigate(['dashboard']);
    // }
  }
}
