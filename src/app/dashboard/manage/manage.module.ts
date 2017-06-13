import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficesModule } from './offices/offices.module';
import { MembersModule } from './members/members.module';

@NgModule({
  imports: [
    CommonModule,
    OfficesModule,
    MembersModule
  ],
  declarations: []
})
export class ManageModule { }
