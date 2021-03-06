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
import { DestinyQuestsDestinyObjectiveProgress } from './destinyQuestsDestinyObjectiveProgress';
import { DestinySocketsDestinyItemPlug } from './destinySocketsDestinyItemPlug';


/**
 * The status of a given item's socket. (which plug is inserted, if any: whether it is enabled, what \"reusable\" plugs can be inserted, etc...)  If I had it to do over, this would probably have a DestinyItemPlug representing the inserted item instead of most of these properties. :shrug:
 */
export interface DestinyEntitiesItemsDestinyItemSocketState { 
    /**
     * The currently active plug, if any.  Note that, because all plugs are statically defined, its effect on stats and perks can be statically determined using the plug item's definition. The stats and perks can be taken at face value on the plug item as the stats and perks it will provide to the user/item.
     */
    plugHash?: number;
    /**
     * Even if a plug is inserted, it doesn't mean it's enabled.  This flag indicates whether the plug is active and providing its benefits.
     */
    isEnabled?: boolean;
    /**
     * A plug may theoretically provide benefits but not be visible - for instance, some older items use a plug's damage type perk to modify their own damage type. These, though they are not visible, still affect the item. This field indicates that state.  An invisible plug, while it provides benefits if it is Enabled, cannot be directly modified by the user.
     */
    isVisible?: boolean;
    /**
     * If a plug is inserted but not enabled, this will be populated with indexes into the plug item definition's plug.enabledRules property, so that you can show the reasons why it is not enabled.
     */
    enableFailIndexes?: Array<number>;
    /**
     * If the item supports reusable plugs, this is the list of plug item hashes that are currently allowed to be used for this socket. See the \"reusablePlugs\" property, which has rendered this obsolete, for more information.
     */
    reusablePlugHashes?: Array<number>;
    /**
     * Sometimes, Plugs may have objectives: generally, these are used for flavor and display purposes. For instance, a Plug might be tracking the number of PVP kills you have made. It will use the parent item's data about that tracking status to determine what to show, and will generally show it using the DestinyObjectiveDefinition's progressDescription property. Refer to the plug's itemHash and objective property for more information if you would like to display even more data.
     */
    plugObjectives?: Array<DestinyQuestsDestinyObjectiveProgress>;
    /**
     * If the item supports reusable plugs, this is the list of plugs that are allowed to be used for the socket, and any relevant information about whether they are \"enabled\", whether they are allowed to be inserted, and any other information such as objectives.  A Reusable Plug is a plug that you can always insert into this socket as long as its insertion rules are passed, regardless of whether or not you have the plug in your inventory. An example of it failing an insertion rule would be if it has an Objective that needs to be completed before it can be inserted, and that objective hasn't been completed yet.  In practice, a socket will *either* have reusable plugs *or* it will allow for plugs in your inventory to be inserted. See DestinyInventoryItemDefinition.socket for more info.
     */
    reusablePlugs?: Array<DestinySocketsDestinyItemPlug>;
}
