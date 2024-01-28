import { ScenarioData } from '../interfaces/scenarios.interface';

export const scenariosConfig: ScenarioData[] = [
  {
    name: 'CEO',
    players: {
      min: 1,
      max: 4,
    },
    seniorityDiscs: [4],
  },
  {
    name: 'Altruism',
    players: {
      min: 1,
      max: 4,
    },
    seniorityDiscs: [4, 5, 6],
  },
  {
    name: 'Another',
    players: {
      min: 1,
      max: 1,
    },
    seniorityDiscs: [4],
  },
];
