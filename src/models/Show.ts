export interface Show {
  name: string;
  summary: string;
  image: any;
}

export interface Episode {
  id: string;
  season: string;
  number: string;
  name: string;
  summary: string;
  image: any;
}

export interface Season {
  number: string;
  episodes: Episode[];
}
