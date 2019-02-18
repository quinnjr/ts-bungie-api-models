import { Leaderboard } from './Leaderboard';


export interface DestinyHistoricalStatsDestinyLeaderboardResults {
  [key: string]: { [key: string]: Leaderboard; } | any;
  /**
   * Indicate the membership ID of the account that is the focal point of the provided leaderboards.
   */
  focusMembershipId?: number;
  /**
   * Indicate the character ID of the character that is the focal point of the provided leaderboards. May be null, in which case any character from the focus membership can appear in the provided leaderboards.
   */
  focusCharacterId?: number;
}
