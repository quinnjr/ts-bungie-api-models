import { Value } from './HistoricalStats/Value';
import { Player } from './Player';

export interface LeaderboardEntry {
  /**
   * Where this player ranks on the leaderboard. A value of 1 is the top rank.
   */
  rank?: number;
  /**
   * Identity details of the player
   */
  player?: Player;
  /**
   * ID of the player's best character for the reported stat.
   */
  characterId?: number;
  /**
   * Value of the stat for this player
   */
  value?: Value;
}
