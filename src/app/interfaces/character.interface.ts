import { Episode } from "./episode.interface";

export interface Character {
    id: number;
    name: string;
    status: string;	
    species: string;
    type: string;	
    gender: string;
    origin: LocationDescription;
    location: LocationDescription;	
    image: string;
    episode: Episode[];
    url: string;
    created: string;
}

export interface LocationDescription {
    name: string;
    url: string;
}
