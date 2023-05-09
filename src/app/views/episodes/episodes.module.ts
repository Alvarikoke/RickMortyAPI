import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { TablaComponent } from 'src/app/shared/components/table/table.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { DeailedDivComponent } from 'src/app/shared/components/detailedDiv/detailedDiv.component';



@NgModule({
  declarations: [
    TablaComponent,
    DeailedDivComponent,
    EpisodesListComponent,
    EpisodeDetailsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EpisodesListComponent,
    EpisodeDetailsComponent
  ]
})
export class EpisodesModule { }
