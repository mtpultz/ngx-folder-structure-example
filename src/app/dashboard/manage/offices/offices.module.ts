import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficesRoutingModule } from './offices-routing.module';
import { OfficeListComponent } from './components/office-list/office-list.component';
import { OfficeEditComponent } from './components/office-edit/office-edit.component';

@NgModule({
  imports: [
    CommonModule,
    OfficesRoutingModule
  ],
  declarations: [OfficeListComponent, OfficeEditComponent]
})
export class OfficesModule { }
