import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MemberListComponent } from './components/member-list/member-list.component';
import { MemberEditComponent } from './components/member-edit/member-edit.component';

@NgModule({
  imports: [
    CommonModule,
    MembersRoutingModule
  ],
  declarations: [MemberListComponent, MemberEditComponent]
})
export class MembersModule { }
