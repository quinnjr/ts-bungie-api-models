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
import { DestinyDestinyItemQuantity } from './destinyDestinyItemQuantity';


/**
 * This defines an item's \"Value\". Unfortunately, this appears to be used in different ways depending on the way that the item itself is used.  For items being sold at a Vendor, this is the default \"sale price\" of the item. These days, the vendor itself almost always sets the price, but it still possible for the price to fall back to this value. For quests, it is a preview of rewards you can gain by completing the quest. For dummy items, if the itemValue refers to an Emblem, it is the emblem that should be shown as the reward. (jeez louise)  It will likely be used in a number of other ways in the future, it appears to be a bucket where they put arbitrary items and quantities into the item.
 */
export interface DestinyDefinitionsDestinyItemValueBlockDefinition { 
    /**
     * References to the items that make up this item's \"value\", and the quantity.
     */
    itemValue?: Array<DestinyDestinyItemQuantity>;
    /**
     * If there's a localized text description of the value provided, this will be said description.
     */
    valueDescription?: string;
}