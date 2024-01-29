import { ScenarioData } from '../interfaces/scenarios.interface';

export const scenariosConfig: ScenarioData[] = [
  {
    name: 'Quick start',
    players: {
      min: 2,
      max: 6,
    },
    seniorityDiscs: [4, 5, 7],
  },
  {
    name: 'Race To Saturn',
    players: {
      min: 2,
      max: 6,
    },
    seniorityDiscs: [4],
  },
  {
    name: 'Grand Tour',
    players: {
      min: 2,
      max: 6,
    },
    seniorityDiscs: [4],
  },
  {
    name: 'Altruism',
    players: {
      min: 1,
      max: 4,
    },
    seniorityDiscs: [4, 5, 7],
  },
  {
    name: 'Hermes Fall',
    players: {
      min: 1,
      max: 1,
    },
    seniorityDiscs: [2],
  },
  {
    name: 'CEO',
    players: {
      min: 1,
      max: 1,
    },
    seniorityDiscs: [4, 7],
  },
  {
    name: 'The Sirens',
    players: {
      min: 1,
      max: 6,
    },
    seniorityDiscs: [4, 5, 7],
  },
  {
    name: 'Red Giant',
    players: {
      min: 2,
      max: 6,
    },
    seniorityDiscs: [4, 5, 7],
  },
  {
    name: 'Diamonds 4 All',
    players: {
      min: 1,
      max: 6,
    },
    seniorityDiscs: [4, 5, 7],
  },
];
