import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '../interfaces/episode.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private baseURL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getLocations() {
    return this.http.get<Location>(`${this.baseURL}/location`);
  }

  getSingleLocation() {
    // return this.http.get<Location>(`${this.baseURL}/location/${this.episodeNumber}`);
    return this.http.get<Location>(`${this.baseURL}/location/1`)
  }

}
