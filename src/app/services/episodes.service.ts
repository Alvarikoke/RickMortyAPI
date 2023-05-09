import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episode } from '../interfaces/episode.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  private baseURL = 'https://rickandmortyapi.com/api';
  protected episodeNumber = '';

  constructor(private http: HttpClient) { }

  getEpisodes() {
    return this.http.get<Episode>(`${this.baseURL}/episode`);
  }

  getSingleEpisode() {
    // return this.http.get<Episode>(`${this.baseURL}/episode/${this.episodeNumber}`);
    return this.http.get<Episode>(`${this.baseURL}/episode/1`)
  }

}
