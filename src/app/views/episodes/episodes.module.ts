import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesListComponent } from './episodes-list/episodes-list.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';


@NgModule({
  declarations: [
    EpisodesListComponent,
    EpisodeDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [
    EpisodesListComponent,
    EpisodeDetailsComponent
  ]
})
export class EpisodesModule { }
