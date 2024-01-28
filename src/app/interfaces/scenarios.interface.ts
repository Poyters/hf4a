export interface ScenarioData {
  name: string;
  players: {
    min: number;
    max: number;
  };
  seniorityDiscs: number[];
}
