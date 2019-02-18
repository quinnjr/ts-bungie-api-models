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
import { DestinyHistoricalStatsDefinitionsDestinyActivityModeType } from './destinyHistoricalStatsDefinitionsDestinyActivityModeType';


/**
 * Summary information about the activity that was played.
 */
export interface DestinyHistoricalStatsDestinyHistoricalStatsActivity { 
    /**
     * The unique hash identifier of the DestinyActivityDefinition that was played. If I had this to do over, it'd be named activityHash. Too late now.
     */
    referenceId?: number;
    /**
     * The unique hash identifier of the DestinyActivityDefinition that was played.
     */
    directorActivityHash?: number;
    /**
     * The unique identifier for this *specific* match that was played.  This value can be used to get additional data about this activity such as who else was playing via the GetPostGameCarnageReport endpoint.
     */
    instanceId?: number;
    /**
     * Indicates the most specific game mode of the activity that we could find.
     */
    mode?: DestinyHistoricalStatsDefinitionsDestinyActivityModeType;
    /**
     * The list of all Activity Modes to which this activity applies, including aggregates. This will let you see, for example, whether the activity was both Clash and part of the Trials of the Nine event.
     */
    modes?: Array<DestinyHistoricalStatsDefinitionsDestinyActivityModeType>;
    /**
     * Whether or not the match was a private match. There's no private matches in Destiny 2... yet... DUN DUN DUNNNN
     */
    isPrivate?: boolean;
}