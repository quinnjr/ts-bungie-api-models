/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

/**
 * As you run into items that need to be classified for Milestone purposes in ways that we cannot infer via direct data, add a new classification here and use a string constant to represent it in the local item config file.  NOTE: This is not all of the item types available, and some of these are holdovers from Destiny 1 that may or may not still exist.
 */
export enum SpecialItemType {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_8 = 8,
    NUMBER_9 = 9,
    NUMBER_23 = 23,
    NUMBER_24 = 24,
    NUMBER_25 = 25,
    NUMBER_27 = 27,
    NUMBER_29 = 29
};
