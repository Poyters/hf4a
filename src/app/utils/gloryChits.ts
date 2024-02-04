import { Player } from '../interfaces/player.interface';

export const getOccupiedGloryChits = (playersData: Player[]) => {
  return playersData.map((player) => player.gloryChits).flat();
};
