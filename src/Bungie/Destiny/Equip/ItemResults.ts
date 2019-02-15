/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

import { ItemResult } from './ItemResult';

/**
 * The results of a bulk Equipping operation performed through the Destiny API.
 */
export interface ItemResults { 
    equipResults?: Array<ItemResult>;
}
