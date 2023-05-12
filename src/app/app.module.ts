import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { EpisodesModule } from './views/episodes/episodes.module';
import { CharactersModule } from './views/characters/characters.module';
import { LocationsModule } from './views/locations/locations.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EpisodesModule,
    CharactersModule,
    LocationsModule,
    HttpClientModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
