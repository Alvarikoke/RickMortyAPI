import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/interfaces/location.interface';
import { LocationsService } from 'src/app/services/locations.service';


@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {

  locations: Location[] = [];

  constructor(private locationsService: LocationsService) { }

  ngOnInit(): void {
    
    this.locationsService.getLocations().subscribe((response: any) => {
      console.log('response :>> ', response);
      this.locations = response.results;
    });  }

}
