/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition } from './destinyDefinitionsCommonDestinyDisplayPropertiesDefinition';
import { DestinyDefinitionsMilestonesDestinyMilestoneActivityDefinition } from './destinyDefinitionsMilestonesDestinyMilestoneActivityDefinition';
import { DestinyDefinitionsMilestonesDestinyMilestoneQuestRewardsDefinition } from './destinyDefinitionsMilestonesDestinyMilestoneQuestRewardsDefinition';


/**
 * Any data we need to figure out whether this Quest Item is the currently active one for the conceptual Milestone. Even just typing this description, I already regret it.
 */
export interface DestinyDefinitionsMilestonesDestinyMilestoneQuestDefinition { 
    /**
     * The item representing this Milestone quest. Use this hash to look up the DestinyInventoryItemDefinition for the quest to find its steps and human readable data.
     */
    questItemHash?: number;
    /**
     * The individual quests may have different definitions from the overall milestone: if there's a specific active quest, use these displayProperties instead of that of the overall DestinyMilestoneDefinition.
     */
    displayProperties?: DestinyDefinitionsCommonDestinyDisplayPropertiesDefinition;
    /**
     * If populated, this image can be shown instead of the generic milestone's image when this quest is live, or it can be used to show a background image for the quest itself that differs from that of the Activity or the Milestone.
     */
    overrideImage?: string;
    /**
     * The rewards you will get for completing this quest, as best as we could extract them from our data. Sometimes, it'll be a decent amount of data. Sometimes, it's going to be sucky. Sorry.
     */
    questRewards?: DestinyDefinitionsMilestonesDestinyMilestoneQuestRewardsDefinition;
    /**
     * The full set of all possible \"conceptual activities\" that are related to this Milestone. Tiers or alternative modes of play within these conceptual activities will be defined as sub-entities. Keyed by the Conceptual Activity Hash. Use the key to look up DestinyActivityDefinition.
     */
    activities?: { [key: string]: DestinyDefinitionsMilestonesDestinyMilestoneActivityDefinition; };
    /**
     * Sometimes, a Milestone's quest is related to an entire Destination rather than a specific activity. In that situation, this will be the hash of that Destination. Hotspots are currently the only Milestones that expose this data, but that does not preclude this data from being returned for other Milestones in the future.
     */
    destinationHash?: number;
}
