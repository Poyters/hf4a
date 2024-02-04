export interface Scenario {
  name: string;
  players: {
    min: number;
    max: number;
  };
  seniorityDiscs: number[];
}
