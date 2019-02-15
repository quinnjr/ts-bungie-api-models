/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

export interface ConstantsEnvironmentLocationMapping { 
    /**
     * The location that is revealed on the director by this mapping.
     */
    locationHash?: number;
    /**
     * A hint that the UI uses to figure out how this location is activated by the player.
     */
    activationSource?: string;
    /**
     * If this is populated, it is the item that you must possess for this location to be active because of this mapping. (theoretically, a location can have multiple mappings, and some might require an item while others don't)
     */
    itemHash?: number;
    /**
     * If this is populated, this is an objective related to the location.
     */
    objectiveHash?: number;
    /**
     * If this is populated, this is the activity you have to be playing in order to see this location appear because of this mapping. (theoretically, a location can have multiple mappings, and some might require you to be in a specific activity when others don't)
     */
    activityHash?: number;
}
