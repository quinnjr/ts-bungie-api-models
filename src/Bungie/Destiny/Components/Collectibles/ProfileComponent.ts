import { Component } from './Component';

export interface ProfileComponent {
  /**
   * The list of collectibles determined by the game as having been \"recently\" acquired.
   */
  recentCollectibleHashes?: Array<number>;
  /**
   * The list of collectibles determined by the game as having been \"recently\" acquired.  The game client itself actually controls this data, so I personally question whether anyone will get much use out of this: because we can't edit this value through the API. But in case anyone finds it useful, here it is.
   */
  newnessFlaggedCollectibleHashes?: Array<number>;
  collectibles?: { [key: string]: Component; };
}
