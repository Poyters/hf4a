import { PlayerData } from '../../interfaces/player.interface';
import { ScenarioData } from '../../interfaces/scenarios.interface';

export interface SaveSheetState {
  scenario: ScenarioData | null;
  players: PlayerData[];
  map: any; // tutaj dodac czesc mapy, gdzie są jakie znaczniki
}

export const saveSheetState: SaveSheetState = {
  scenario: null,
  players: [],
  map: null,
};
