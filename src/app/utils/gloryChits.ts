import { PlayerData } from '../interfaces/player.interface';

export const getOccupiedGloryChits = (playersData: PlayerData[]) => {
  return playersData.map((player) => player.gloryChits).flat();
};
