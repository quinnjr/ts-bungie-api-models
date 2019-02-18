import { SaleItemComponent } from '../../Entities/Vendors/SaleItemComponent';

/**
 * The collection of all items currently being sold by a specific Vendor and visible to the given character for which the request was made.
 */
export interface VendorSaleItemSetComponent {
  /**
   * The items being sold by this vendor, keyed by the vendorItemIndex of the item being sold. (because showing sale items depends on the ordering dictated by the categories being shown - see DestinyVendorCategoryComponent - this is a dictionary for quick lookup capability.)
   */
  saleItems?: { [key: string]: SaleItemComponent; };
}
