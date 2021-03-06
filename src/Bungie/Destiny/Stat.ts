/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

/**
 * Represents a stat on an item *or* Character (NOT a Historical Stat, but a physical attribute stat like Attack, Defense etc...)
 */
export interface Stat { 
    /**
     * The hash identifier for the Stat. Use it to look up the DestinyStatDefinition for static data about the stat.
     */
    statHash?: number;
    /**
     * The current value of the Stat.
     */
    value?: number;
    /**
     * The highest possible value for the stat, if we were able to compute it. (I wouldn't necessarily trust this value right now. I would like to improve its calculation in later iterations of the API. Consider this a placeholder for desired future functionality)
     */
    maximumValue?: number;
}
