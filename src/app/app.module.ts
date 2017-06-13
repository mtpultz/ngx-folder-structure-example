import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Root
import { AppConfigModule } from './app-config.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// Modules
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Application
    CoreModule,
    SharedModule,
    AuthModule,
    DashboardModule,
    AppConfigModule,
    AppRoutingModule // WARNING: MUST be the last routing module imported!!!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
