import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { LocationDetailsComponent } from './location-details/location-details.component';



@NgModule({
  declarations: [
    LocationsListComponent,
    LocationDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule
  ],
  exports: [
    LocationsListComponent,
    LocationDetailsComponent
  ]
})
export class LocationsModule { }
