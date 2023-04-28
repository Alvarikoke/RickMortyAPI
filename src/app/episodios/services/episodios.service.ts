import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  private baseURL = 'https://rickandmortyapi.com/api'

  constructor(private http: HttpClient) { }

  getEpisodes() {
    return this.http.get(`${this.baseURL}/episode`);
  }
}
