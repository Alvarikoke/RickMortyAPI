import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/episode.interface';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: Character[] = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    
    this.charactersService.getCharacters().subscribe((response: any) => {
      console.log('response :>> ', response);
      this.characters = response.results;
    });
  }

}
