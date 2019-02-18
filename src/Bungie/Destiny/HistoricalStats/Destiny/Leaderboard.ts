import { LeaderboardEntry } from './LeaderboardEntry';


export interface Leaderboard {
  statId?: string;
  entries?: Array<LeaderboardEntry>;
}
