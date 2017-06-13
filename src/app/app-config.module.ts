import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';

// TODO: using interfaces causes warnings, why?
// export interface AppConfig {
export class AppConfig {
  apiEndpoint: string;
}

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_DI_CONFIG: AppConfig = {
  apiEndpoint: environment.apiEndpoint
};

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})
export class AppConfigModule { }
