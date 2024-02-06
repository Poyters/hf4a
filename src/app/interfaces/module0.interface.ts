export interface PoliticalAssembly {
  assemblies: Assembly[];
}

export interface Assembly {
  name: string; //Honor
  seniorityDiscs: number;
  delegates: PlayerDelegate[];
}

export interface PlayerDelegate {
  playerName: string;
  quantity: number;
}
