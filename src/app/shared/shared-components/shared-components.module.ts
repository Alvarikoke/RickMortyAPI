import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { DetailedDivComponent } from './detailedDiv/detailedDiv.component';



@NgModule({
  declarations: [
    TableComponent,
    DetailedDivComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    DetailedDivComponent
  ]
})
export class SharedComponentsModule { }
