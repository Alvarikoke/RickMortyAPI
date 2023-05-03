import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './components/tabla/tabla.component';
import { EpisodiosPageComponent } from './pages/episodios-page/episodios-page.component';



@NgModule({
  declarations: [
    TablaComponent,
    EpisodiosPageComponent
  ],
  imports: [
    CommonModule,
    EpisodiosPageComponent,
    TablaComponent
  ],
  exports: [
    EpisodiosPageComponent
  ]
})
export class EpisodiosModule { }
