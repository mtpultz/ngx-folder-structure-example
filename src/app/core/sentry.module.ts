import { NgModule, ErrorHandler } from '@angular/core';

// Environment
import { environment } from '../../environments/environment';

// Packages
import * as Raven from 'raven-js';

Raven
  .config('https://ee5f8d2910de4a149750428139b82d5f@sentry.io/147601')
  .install();

export class RavenErrorHandler implements ErrorHandler {
  private production: boolean;

  constructor() {
    this.production = environment.production;
  }

  handleError(err: any): void {

    if (!this.production) {
      // TODO: find and add this to log service so all logging is prevented in production
      console.error('SENTRY CAPTURED EXCEPTION', err);
    }

    Raven.captureException(err.originalError);
  }
}

@NgModule({
  providers: [{
    provide: ErrorHandler,
    useClass: RavenErrorHandler
  }]
})
export class SentryModule { }
