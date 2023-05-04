import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { TablaComponent } from 'src/app/shared/components/table/table.component';



@NgModule({
  declarations: [
    TablaComponent,
    EpisodesListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EpisodesListComponent
  ]
})
export class EpisodesModule { }
