/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

import { IgnoreStatus } from './IgnoreStatus';

export interface IgnoreResponse {
  isIgnored?: boolean;
  ignoreFlags?: IgnoreStatus;
}
