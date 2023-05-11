import { Episode } from "./episode.interface";
import { Location as loc } from "./location.interface";

export interface Character {
    id: number;
    name: string;
    status: string;	
    species: string;
    type: string;	
    gender: string;
    origin?: loc;
    location?: loc;	
    image: string;
    episode: Episode[];
    url: string;
    created: string;
}
