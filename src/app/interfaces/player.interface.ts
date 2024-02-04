import { MapObject } from './map.interface';

export interface Card {
  name: string;
}

export interface Player {
  playerName: string;
  crewType: string;
  aquas: number;
  cards: PlayerCards;
  gloryChits: string[];
  prospects: MapObject[];
  colonies: MapObject[];
  factories: MapObject[];
  rocketPosition: string;
}

export interface PlayerCards {
  rocket: Card[];
  leo: Card[];
  outpost1: Card[];
  outpost2: Card[];
  hand: Card[];
}
