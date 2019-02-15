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
import { DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent } from './dictionaryComponentResponseOfint64AndDestinyItemInstanceComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent } from './dictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemPerksComponent } from './dictionaryComponentResponseOfint64AndDestinyItemPerksComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemRenderComponent } from './dictionaryComponentResponseOfint64AndDestinyItemRenderComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent } from './dictionaryComponentResponseOfint64AndDestinyItemSocketsComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemStatsComponent } from './dictionaryComponentResponseOfint64AndDestinyItemStatsComponent';
import { DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent } from './dictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent';
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent } from './dictionaryComponentResponseOfuint32AndDestinyItemPlugComponent';


export interface DestinyItemComponentSetOfint64 { 
    instances?: DictionaryComponentResponseOfint64AndDestinyItemInstanceComponent;
    perks?: DictionaryComponentResponseOfint64AndDestinyItemPerksComponent;
    renderData?: DictionaryComponentResponseOfint64AndDestinyItemRenderComponent;
    stats?: DictionaryComponentResponseOfint64AndDestinyItemStatsComponent;
    sockets?: DictionaryComponentResponseOfint64AndDestinyItemSocketsComponent;
    talentGrids?: DictionaryComponentResponseOfint64AndDestinyItemTalentGridComponent;
    plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;
    objectives?: DictionaryComponentResponseOfint64AndDestinyItemObjectivesComponent;
}
