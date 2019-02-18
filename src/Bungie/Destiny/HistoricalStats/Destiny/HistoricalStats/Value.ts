import { ValuePair } from './ValuePair';


export interface DestinyHistoricalStatsDestinyHistoricalStatsValue {
  /**
   * Unique ID for this stat
   */
  statId?: string;
  /**
   * Basic stat value.
   */
  basic?: ValuePair;
  /**
   * Per game average for the statistic, if applicable
   */
  pga?: ValuePair;
  /**
   * Weighted value of the stat if a weight greater than 1 has been assigned.
   */
  weighted?: ValuePair;
  /**
   * When a stat represents the best, most, longest, fastest or some other personal best, the actual activity ID where that personal best was established is available on this property.
   */
  activityId?: number;
}
