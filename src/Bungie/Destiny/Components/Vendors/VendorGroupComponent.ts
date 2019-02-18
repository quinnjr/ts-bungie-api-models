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
