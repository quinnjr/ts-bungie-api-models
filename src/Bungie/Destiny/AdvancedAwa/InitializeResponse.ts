/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

export interface InitializeResponse {
  /**
   * ID used to get the token. Present this ID to the user as it will identify this specific request on their device.
   */
  correlationId?: string;
  /**
   * True if the PUSH message will only be sent to the device that made this request.
   */
  sentToSelf?: boolean;
}
