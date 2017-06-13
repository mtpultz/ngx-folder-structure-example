import { NgModule } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

/**
 * Configuration of the AuthHttp service used for authenticated HTTP requests.
 *
 * ### Key Features
 * 1. Send a JWT on a per-request basis using the explicit AuthHttp class
 * 2. Decode a JWT
 * 3. Check the expiration of the JWT
 * 4. Conditionally allow route navigation based on JWT status
 *
 * @export
 * @param {Http} http
 * @param {RequestOptions} options
 * @returns {AuthHttp}
 */
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (() => localStorage.getItem('token')),
    globalHeaders: [{ 'Content-Type': 'application/json' }],
    noJwtError: true // Allow requests no token or expired and handle 401 response
  }), http, options);
}

@NgModule({
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class AuthHttpModule { }
