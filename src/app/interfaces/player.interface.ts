export interface Card {
  name: string;
}

export interface PlayerData {
  playerName: string;
  crewType: string;
  aquas: number;
  cards: PlayerCards;
  gloryChits: string[];
}

export interface PlayerCards {
  rocket: Card[];
  leo: Card[];
  outpost1: Card[];
  outpost2: Card[];
  hand: Card[];
}
