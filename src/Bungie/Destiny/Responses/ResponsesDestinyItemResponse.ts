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
import { SingleComponentResponseOfDestinyItemComponent } from './singleComponentResponseOfDestinyItemComponent';
import { SingleComponentResponseOfDestinyItemInstanceComponent } from './singleComponentResponseOfDestinyItemInstanceComponent';
import { SingleComponentResponseOfDestinyItemObjectivesComponent } from './singleComponentResponseOfDestinyItemObjectivesComponent';
import { SingleComponentResponseOfDestinyItemPerksComponent } from './singleComponentResponseOfDestinyItemPerksComponent';
import { SingleComponentResponseOfDestinyItemRenderComponent } from './singleComponentResponseOfDestinyItemRenderComponent';
import { SingleComponentResponseOfDestinyItemSocketsComponent } from './singleComponentResponseOfDestinyItemSocketsComponent';
import { SingleComponentResponseOfDestinyItemStatsComponent } from './singleComponentResponseOfDestinyItemStatsComponent';
import { SingleComponentResponseOfDestinyItemTalentGridComponent } from './singleComponentResponseOfDestinyItemTalentGridComponent';


/**
 * The response object for retrieving an individual instanced item. None of these components are relevant for an item that doesn't have an \"itemInstanceId\": for those, get your information from the DestinyInventoryDefinition.
 */
export interface DestinyResponsesDestinyItemResponse { 
    /**
     * If the item is on a character, this will return the ID of the character that is holding the item.
     */
    characterId?: number;
    /**
     * Common data for the item relevant to its non-instanced properties.  COMPONENT TYPE: ItemCommonData
     */
    item?: SingleComponentResponseOfDestinyItemComponent;
    /**
     * Basic instance data for the item.  COMPONENT TYPE: ItemInstances
     */
    instance?: SingleComponentResponseOfDestinyItemInstanceComponent;
    /**
     * Information specifically about the item's objectives.  COMPONENT TYPE: ItemObjectives
     */
    objectives?: SingleComponentResponseOfDestinyItemObjectivesComponent;
    /**
     * Information specifically about the perks currently active on the item.  COMPONENT TYPE: ItemPerks
     */
    perks?: SingleComponentResponseOfDestinyItemPerksComponent;
    /**
     * Information about how to render the item in 3D.  COMPONENT TYPE: ItemRenderData
     */
    renderData?: SingleComponentResponseOfDestinyItemRenderComponent;
    /**
     * Information about the computed stats of the item: power, defense, etc...  COMPONENT TYPE: ItemStats
     */
    stats?: SingleComponentResponseOfDestinyItemStatsComponent;
    /**
     * Information about the talent grid attached to the item. Talent nodes can provide a variety of benefits and abilities, and in Destiny 2 are used almost exclusively for the character's \"Builds\".  COMPONENT TYPE: ItemTalentGrids
     */
    talentGrid?: SingleComponentResponseOfDestinyItemTalentGridComponent;
    /**
     * Information about the sockets of the item: which are currently active, what potential sockets you could have and the stats/abilities/perks you can gain from them.  COMPONENT TYPE: ItemSockets
     */
    sockets?: SingleComponentResponseOfDestinyItemSocketsComponent;
}
