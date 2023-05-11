import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { CharactersService } from 'src/app/services/characters.service';
import { Location } from '../../../interfaces/location.interface';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  character!: Character;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {

    this.charactersService.getSingleCharacter().subscribe((response: any) => {
      this.character = {... response}; // Spread operator (es fundamental), iguala pero coge otra posicion de memoria (obj y arr)
      console.log('this.episode :>> ', this.character);
    });
  }

}
