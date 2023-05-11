import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersListComponent } from './characters-list/characters-list.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { CharacterDetailsComponent } from './character-details/character-details.component';



@NgModule({
  declarations: [
    CharactersListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [
    CharactersListComponent,
    CharacterDetailsComponent
  ]
})
export class CharactersModule { }
