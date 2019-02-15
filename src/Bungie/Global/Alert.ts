/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

import { AlertLevel } from './AlertLevel';
import { AlertType } from './AlertType';
import { StreamInfo } from '../StreamInfo';

export interface Alert {
  alertKey?: string;
  alertHtml?: string;
  alertTimestamp?: Date;
  alertLink?: string;
  alertLevel?: AlertLevel;
  alertType?: AlertType;
  streamInfo?: StreamInfo;
}
