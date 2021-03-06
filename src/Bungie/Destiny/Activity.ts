/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com

 */
import { DifficultyTier } from './Activity/DifficultyTier';

/**
 * Represents the \"Live\" data that we can obtain about a Character's status with a specific Activity. This will tell you whether the character can participate in the activity, as well as some other basic mutable information.   Meant to be combined with static DestinyActivityDefinition data for a full picture of the Activity.
 */
export interface Activity {
  /**
   * The hash identifier of the Activity. Use this to look up the DestinyActivityDefinition of the activity.
   */
  activityHash?: number;
  /**
   * If true, then the activity should have a \"new\" indicator in the Director UI.
   */
  isNew?: boolean;
  /**
   * If true, the user is allowed to lead a Fireteam into this activity.
   */
  canLead?: boolean;
  /**
   * If true, the user is allowed to join with another Fireteam in this activity.
   */
  canJoin?: boolean;
  /**
   * If true, we both have the ability to know that the user has completed this activity and they have completed it. Unfortunately, we can't necessarily know this for all activities. As such, this should probably only be used if you already know in advance which specific activities you wish to check.
   */
  isCompleted?: boolean;
  /**
   * If true, the user should be able to see this activity.
   */
  isVisible?: boolean;
  /**
   * The difficulty level of the activity, if applicable.
   */
  displayLevel?: number;
  /**
   * The recommended light level for the activity, if applicable.
   */
  recommendedLight?: number;
  /**
   * A DestinyActivityDifficultyTier enum value indicating the difficulty of the activity.
   */
  difficultyTier?: DifficultyTier;
}
