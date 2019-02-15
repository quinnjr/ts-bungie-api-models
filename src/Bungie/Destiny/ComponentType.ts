/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

/**
 * Represents the possible components that can be returned from Destiny \"Get\" calls such as GetProfile, GetCharacter, GetVendor etc...  When making one of these requests, you will pass one or more of these components as a comma separated list in the \"?components=\" querystring parameter. For instance, if you want baseline Profile data, Character Data, and character progressions, you would pass \"?components=Profiles,Characters,CharacterProgressions\" You may use either the numerical or string values.
 */
export enum ComponentType {
    NUMBER_0 = 0,
    NUMBER_100 = 100,
    NUMBER_101 = 101,
    NUMBER_102 = 102,
    NUMBER_103 = 103,
    NUMBER_104 = 104,
    NUMBER_200 = 200,
    NUMBER_201 = 201,
    NUMBER_202 = 202,
    NUMBER_203 = 203,
    NUMBER_204 = 204,
    NUMBER_205 = 205,
    NUMBER_300 = 300,
    NUMBER_301 = 301,
    NUMBER_302 = 302,
    NUMBER_303 = 303,
    NUMBER_304 = 304,
    NUMBER_305 = 305,
    NUMBER_306 = 306,
    NUMBER_307 = 307,
    NUMBER_308 = 308,
    NUMBER_400 = 400,
    NUMBER_401 = 401,
    NUMBER_402 = 402,
    NUMBER_500 = 500,
    NUMBER_600 = 600,
    NUMBER_700 = 700,
    NUMBER_800 = 800,
    NUMBER_900 = 900
};
