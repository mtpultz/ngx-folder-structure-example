import { NgModule } from '@angular/core';

import { FormsRoutingModule } from './forms-routing.module';
import { IrcFormModule } from './irc-form/irc-form.module';
import { RatFormModule } from './rat-form/rat-form.module';

@NgModule({
  imports: [
    FormsRoutingModule,
    IrcFormModule,
    RatFormModule
  ],
  declarations: []
})
export class FormsModule { }
