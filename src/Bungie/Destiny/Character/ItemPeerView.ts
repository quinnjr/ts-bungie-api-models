/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

import { DyeReference } from '../DyeReference';

/**
 * Bare minimum summary information for an item, for the sake of 3D rendering the item.
 */
export interface ItemPeerView {
  /**
   * The hash identifier of the item in question. Use it to look up the DestinyInventoryItemDefinition of the item for static rendering data.
   */
  itemHash?: number;
  /**
   * The list of dyes that have been applied to this item.
   */
  dyes?: Array<DyeReference>;
}
