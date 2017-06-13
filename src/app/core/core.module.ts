import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpModule } from '@angular/http';

// Guards
import { throwIfAlreadyLoaded } from './module-import-guard';

// Modules
import { AuthHttpModule } from './auth-http.module';
import { SentryModule } from './sentry.module';

// Guards

// Services
import { WindowRefService } from './window-ref.service';

// Component
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Packages
import { JwtHelper } from 'angular2-jwt';

@NgModule({
  imports: [
    // Angular
    HttpModule,
    // Application
    AuthHttpModule,
    SentryModule
  ],
  declarations: [
    PageNotFoundComponent
  ],
  providers: [
    // Application
    WindowRefService,
    // Packages
    JwtHelper
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
