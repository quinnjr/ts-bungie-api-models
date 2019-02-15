/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */
import { VendorGroup } from './VendorGroup';

/**
 * This component returns references to all of the Vendors in the response, grouped by categorizations that Bungie has deemed to be interesting, in the order in which both the groups and the vendors within that group should be rendered.
 */
export interface VendorGroupComponent { 
    /**
     * The ordered list of groups being returned.
     */
    groups?: Array<VendorGroup>;
}
