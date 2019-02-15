/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

import { PlatformErrorCodes } from '../../PlatformErrorCodes';

/**
 * The results of an Equipping operation performed through the Destiny API.
 */
export interface ItemResult { 
    /**
     * The instance ID of the item in question (all items that can be equipped must, but definition, be Instanced and thus have an Instance ID that you can use to refer to them)
     */
    itemInstanceId?: number;
    /**
     * A PlatformErrorCodes enum indicating whether it succeeded, and if it failed why.
     */
    equipStatus?: PlatformErrorCodes;
}
