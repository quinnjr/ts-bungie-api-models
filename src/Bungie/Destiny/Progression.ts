/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.3.3
 * Contact: support@bungie.com
 */

/**
 * Information about a current character's status with a Progression. A progression is a value that can increase with activity and has levels. Think Character Level and Reputation Levels. Combine this \"live\" data with the related DestinyProgressionDefinition for a full picture of the Progression.
 */
export interface Progression { 
    /**
     * The hash identifier of the Progression in question. Use it to look up the DestinyProgressionDefinition in static data.
     */
    progressionHash?: number;
    /**
     * The amount of progress earned today for this progression.
     */
    dailyProgress?: number;
    /**
     * If this progression has a daily limit, this is that limit.
     */
    dailyLimit?: number;
    /**
     * The amount of progress earned toward this progression in the current week.
     */
    weeklyProgress?: number;
    /**
     * If this progression has a weekly limit, this is that limit.
     */
    weeklyLimit?: number;
    /**
     * This is the total amount of progress obtained overall for this progression (for instance, the total amount of Character Level experience earned)
     */
    currentProgress?: number;
    /**
     * This is the level of the progression (for instance, the Character Level).
     */
    level?: number;
    /**
     * This is the maximum possible level you can achieve for this progression (for example, the maximum character level obtainable)
     */
    levelCap?: number;
    /**
     * Progressions define their levels in \"steps\". Since the last step may be repeatable, the user may be at a higher level than the actual Step achieved in the progression. Not necessarily useful, but potentially interesting for those cruising the API. Relate this to the \"steps\" property of the DestinyProgression to see which step the user is on, if you care about that. (Note that this is Content Version dependent since it refers to indexes.)
     */
    stepIndex?: number;
    /**
     * The amount of progression (i.e. \"Experience\") needed to reach the next level of this Progression. Jeez, progression is such an overloaded word.
     */
    progressToNextLevel?: number;
    /**
     * The total amount of progression (i.e. \"Experience\") needed in order to reach the next level.
     */
    nextLevelAt?: number;
}
