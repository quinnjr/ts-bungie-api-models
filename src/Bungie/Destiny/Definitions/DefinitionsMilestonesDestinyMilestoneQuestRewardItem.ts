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


/**
 * A subclass of DestinyItemQuantity, that provides not just the item and its quantity but also information that BNet can - at some point - use internally to provide more robust runtime information about the item's qualities.  If you want it, please ask! We're just out of time to wire it up right now. Or a clever person just may do it with our existing endpoints.
 */
export interface DestinyDefinitionsMilestonesDestinyMilestoneQuestRewardItem { 
    /**
     * The quest reward item *may* be associated with a vendor. If so, this is that vendor. Use this hash to look up the DestinyVendorDefinition.
     */
    vendorHash?: number;
    /**
     * The quest reward item *may* be associated with a vendor. If so, this is the index of the item being sold, which we can use at runtime to find instanced item information for the reward item.
     */
    vendorItemIndex?: number;
    /**
     * The hash identifier for the item in question. Use it to look up the item's DestinyInventoryItemDefinition.
     */
    itemHash?: number;
    /**
     * If this quantity is referring to a specific instance of an item, this will have the item's instance ID. Normally, this will be null.
     */
    itemInstanceId?: number;
    /**
     * The amount of the item needed/available depending on the context of where DestinyItemQuantity is being used.
     */
    quantity?: number;
}
