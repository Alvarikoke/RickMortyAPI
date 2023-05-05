export interface Character {
    id: number;
    name: string;
    status: string;	
    species: string;
    type: string;	
    gender: string;
    origin: object;
    location: object;	
    image: string;
    episode: Episode[];
    url: string;
    created: string;
}

export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: Character[];
    url: string;
    created: string;
}

export interface Episode {
    name: string;
    air_date: string;
    episode: string;
    characters: Character[];
    url: string;
    created: string;
}