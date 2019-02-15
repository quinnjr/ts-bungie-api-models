/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

/**
 * Represents a specific group of vendors that can be rendered in the recommended order.  How do we figure out this order? It's a long story, and will likely get more complicated over time.
 */
export interface VendorGroup { 
    vendorGroupHash?: number;
    /**
     * The ordered list of vendors within a particular group.
     */
    vendorHashes?: Array<number>;
}
