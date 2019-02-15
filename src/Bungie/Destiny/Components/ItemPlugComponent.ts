/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

import { ObjectiveProgress } from '../Quests/ObjectiveProgress';

/**
 * Plugs are non-instanced items that can provide Stat and Perk benefits when socketed into an instanced item. Items have Sockets, and Plugs are inserted into Sockets.  This component finds all items that are considered \"Plugs\" in your inventory, and return information about the plug aside from any specific Socket into which it could be inserted.
 */
export interface ItemPlugComponent {
  /**
   * The hash identifier of the DestinyInventoryItemDefinition that represents this plug.
   */
  plugItemHash?: number;
  /**
   * Sometimes, Plugs may have objectives: these are often used for flavor and display purposes, but they can be used for any arbitrary purpose (both fortunately and unfortunately). Recently (with Season 2) they were expanded in use to be used as the \"gating\" for whether the plug can be inserted at all. For instance, a Plug might be tracking the number of PVP kills you have made. It will use the parent item's data about that tracking status to determine what to show, and will generally show it using the DestinyObjectiveDefinition's progressDescription property. Refer to the plug's itemHash and objective property for more information if you would like to display even more data.
   */
  plugObjectives?: Array<ObjectiveProgress>;
  /**
   * If true, this plug has met all of its insertion requirements. Big if true.
   */
  canInsert?: boolean;
  /**
   * If true, this plug will provide its benefits while inserted.
   */
  enabled?: boolean;
  /**
   * If the plug cannot be inserted for some reason, this will have the indexes into the plug item definition's plug.insertionRules property, so you can show the reasons why it can't be inserted.  This list will be empty if the plug can be inserted.
   */
  insertFailIndexes?: Array<number>;
  /**
   * If a plug is not enabled, this will be populated with indexes into the plug item definition's plug.enabledRules property, so that you can show the reasons why it is not enabled.  This list will be empty if the plug is enabled.
   */
  enableFailIndexes?: Array<number>;
}
