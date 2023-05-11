import { Character } from "./character.interface";

export interface Episode {
    name: string;
    air_date: string;
    episode: string;
    characters: Character[];
    url: string;
    created: string;
}