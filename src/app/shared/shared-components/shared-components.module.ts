import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    TableComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    DetailsComponent
  ]
})
export class SharedComponentsModule { }
