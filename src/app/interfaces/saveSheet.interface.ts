import { MapObject } from './map.interface';
import { Player } from './player.interface';
import { Scenario } from './scenarios.interface';

export interface SaveSheet {
  id: string;
  scenario: Scenario;
  players: Player[];
  seniorityDiscs: number;
  leftSeniorityDiscs: number;
  yearPosition: number;
  date: string;
  mapState: {
    bridges: MapObject[];
    bustedDiscs: MapObject[];
  };
}