import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { TablaComponent } from 'src/app/shared/components/table/table.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { ListComponent } from 'src/app/shared/components/list/list.component';



@NgModule({
  declarations: [
    TablaComponent,
    ListComponent,
    EpisodesListComponent,
    EpisodeDetailsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EpisodesListComponent
  ]
})
export class EpisodesModule { }
