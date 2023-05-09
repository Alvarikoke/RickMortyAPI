import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../interfaces/episode.interface';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private baseURL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get<Character>(`${this.baseURL}/character`);
  }

  getSingleCharacter() {
    // return this.http.get<Character>(`${this.baseURL}/episode/${this.episodeNumber}`);
    return this.http.get<Character>(`${this.baseURL}/character/1`)
  }

}
