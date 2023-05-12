import { Component, OnInit } from '@angular/core';
import { TypeData } from 'src/app/interfaces/commons.interface';
import { Location } from 'src/app/interfaces/location.interface';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  location!: Location;
  type: TypeData = TypeData.Location;

  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {

    this.locationsService.getSingleLocation().subscribe((response: any) => {
      this.location = {... response}; // Spread operator (es fundamental), iguala pero coge otra posicion de memoria (obj y arr)
      console.log('this.episode :>> ', this.location);
    });
  }

}
