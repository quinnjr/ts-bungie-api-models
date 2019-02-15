/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

import { Progression } from '../../Progression';
import { Milestone } from '../../Milestones/Milestone';
import { FactionProgression } from '../../Progression/FactionProgression';
import { ObjectiveProgress } from '../../Quests/ObjectiveProgress';
import { QuestStatus } from '../../Quests/QuestStatus';

/**
 * This component returns anything that could be considered \"Progression\" on a user: data where the user is gaining levels, reputation, completions, rewards, etc...
 */
export interface CharacterProgressionComponent {
  /**
   * A Dictionary of all known progressions for the Character, keyed by the Progression's hash.  Not all progressions have user-facing data, but those who do will have that data contained in the DestinyProgressionDefinition.
   */
  progressions?: { [key: string]: Progression; };
  /**
   * A dictionary of all known Factions, keyed by the Faction's hash. It contains data about this character's status with the faction.
   */
  factions?: { [key: string]: FactionProgression; };
  /**
   * Milestones are related to the simple progressions shown in the game, but return additional and hopefully helpful information for users about the specifics of the Milestone's status.
   */
  milestones?: { [key: string]: Milestone; };
  /**
   * If the user has any active quests, the quests' statuses will be returned here.  Note that quests have been largely supplanted by Milestones, but that doesn't mean that they won't make a comeback independent of milestones at some point.
   */
  quests?: Array<QuestStatus>;
  /**
   * Sometimes, you have items in your inventory that don't have instances, but still have Objective information. This provides you that objective information for uninstanced items.   This dictionary is keyed by the item's hash: which you can use to look up the name and description for the overall task(s) implied by the objective. The value is the list of objectives for this item, and their statuses.
   */
  uninstancedItemObjectives?: { [key: string]: Array<ObjectiveProgress>; };
  /**
   * The set of checklists that can be examined for this specific character, keyed by the hash identifier of the Checklist (DestinyChecklistDefinition)  For each checklist returned, its value is itself a Dictionary keyed by the checklist's hash identifier with the value being a boolean indicating if it's been discovered yet.
   */
  checklists?: { [key: string]: { [key: string]: boolean; }; };
}
