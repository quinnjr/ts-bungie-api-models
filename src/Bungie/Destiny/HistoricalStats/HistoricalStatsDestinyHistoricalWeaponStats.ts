/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DestinyHistoricalStatsDestinyHistoricalStatsValue } from './destinyHistoricalStatsDestinyHistoricalStatsValue';


export interface DestinyHistoricalStatsDestinyHistoricalWeaponStats { 
    /**
     * The hash ID of the item definition that describes the weapon.
     */
    referenceId?: number;
    /**
     * Collection of stats for the period.
     */
    values?: { [key: string]: DestinyHistoricalStatsDestinyHistoricalStatsValue; };
}
