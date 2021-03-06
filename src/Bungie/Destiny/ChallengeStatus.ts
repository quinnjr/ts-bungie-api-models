/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */
 
import { ObjectiveProgress } from './Destiny/Quests/ObjectiveProgress';

/**
 * Represents the status and other related information for a challenge that is - or was - available to a player.   A challenge is a bonus objective, generally tacked onto Quests or Activities, that provide additional variations on play.
 */
export interface ChallengeStatus { 
    /**
     * The progress - including completion status - of the active challenge.
     */
    objective?: ObjectiveProgress;
}
