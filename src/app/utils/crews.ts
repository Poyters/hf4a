import { PlayerData } from '../interfaces/player.interface';
import { crewConfig } from '../configs/crew.config';

/**
 * Each player can choose one crew card. Each crew card has two sides, with different crews but the same color.
 *
 * The function returns each occupied crew, for example, the player has a crew of type B, this means that B and C are occupied (both have the same color).
 * @param players
 */
export const getOccupiedCrews = (players: PlayerData[]) => {
  const crewTypes = players.map((player) => player.crewType);
  const occupiedColors = getCrewColors(crewTypes);
  const occupiedCrewTypes = getCrewTypesByColors(occupiedColors);

  return occupiedCrewTypes;
};

export const getCrewColors = (crewTypes: string[]): string[] => {
  const crewColors = crewTypes
    .map((type) => (crewConfig.find((crew) => crew.type === type) || {}).color)
    .filter(Boolean) as string[];

  return crewColors;
};

export const getCrewTypesByColors = (colors: string[]) => {
  return crewConfig.filter((c) => colors.includes(c.color)).map((c) => c.type);
};
