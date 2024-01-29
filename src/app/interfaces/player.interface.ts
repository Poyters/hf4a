export interface Card {
  name: string;
}

export interface PlayerData {
  playerName: string;
  crewType: string;
  aquas: number;
  cards: {
    rocket: Card[];
    leo: Card[];
    outpost1: Card[];
    outpost2: Card[];
  };
}
