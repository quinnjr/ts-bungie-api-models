/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */
 
import { State } from '../../Record/State';
import { ObjectiveProgress } from '../../Quests/ObjectiveProgress';

export interface RecordComponent { 
    state?: State;
    objectives?: Array<ObjectiveProgress>;
}
