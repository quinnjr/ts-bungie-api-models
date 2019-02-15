/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

import { ItemPeerView } from './ItemPeerView';

/**
 * A minimal view of a character's equipped items, for the purpose of rendering a summary screen or showing the character in 3D.
 */
export interface PeerView {
  equipment?: Array<ItemPeerView>;
}