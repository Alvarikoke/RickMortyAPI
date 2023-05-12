import { Episode } from "./episode.interface";

export interface Character {
    id: number;
    name: string;
    status: string;	
    species: string;
    type: string;	
    gender: string;
    origin: Origin;
    location: LocationCharacter;	
    image: string;
    episode: Episode[];
    url: string;
    created: string;
}

export interface Origin {
    name: string;
    url: string;
}

export interface LocationCharacter {
    name: string;
    url: string;
}
