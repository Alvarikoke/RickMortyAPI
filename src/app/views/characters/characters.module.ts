import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersListComponent } from './characters-list/characters-list.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';



@NgModule({
  declarations: [
    CharactersListComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [
    CharactersListComponent,
  ]
})
export class CharactersModule { }
