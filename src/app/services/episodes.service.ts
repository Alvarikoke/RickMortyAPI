import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Episode } from '../interfaces/episode.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  private baseURL = 'https://rickandmortyapi.com/api'

  constructor(private http: HttpClient) { }

  getEpisodes() {
    return this.http.get<Episode>(`${this.baseURL}/episode`);
  }
}
