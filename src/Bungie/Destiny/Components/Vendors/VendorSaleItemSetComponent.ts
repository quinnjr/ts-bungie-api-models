/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */
 
import { SaleItemComponent } from '../Entities/Vendors/SaleItemComponent';

/**
 * The collection of all items currently being sold by a specific Vendor and visible to the given character for which the request was made.
 */
export interface VendorSaleItemSetComponent { 
    /**
     * The items being sold by this vendor, keyed by the vendorItemIndex of the item being sold. (because showing sale items depends on the ordering dictated by the categories being shown - see DestinyVendorCategoryComponent - this is a dictionary for quick lookup capability.)
     */
    saleItems?: { [key: string]: SaleItemComponent; };
}
