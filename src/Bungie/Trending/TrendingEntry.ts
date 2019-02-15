import { Type } from './Entry/Type';

/**
 * The list entry view for trending items. Returns just enough to show the item on the trending page.
 */
export interface TrendingEntry {
  /**
   * The weighted score of this trending item.
   */
  weight?: number;
  isFeatured?: boolean;
  /**
   * We don't know whether the identifier will be a string, a uint, or a long... so we're going to cast it all to a string. But either way, we need any trending item created to have a single unique identifier for its type.
   */
  identifier?: string;
  /**
   * An enum - unfortunately - dictating all of the possible kinds of trending items that you might get in your result set, in case you want to do custom rendering or call to get the details of the item.
   */
  entityType?: Type;
  /**
   * The localized \"display name/article title/'primary localized identifier'\" of the entity.
   */
  displayName?: string;
  /**
   * If the entity has a localized tagline/subtitle/motto/whatever, that is found here.
   */
  tagline?: string;
  image?: string;
  startDate?: Date;
  endDate?: Date;
  link?: string;
  /**
   * If this is populated, the entry has a related WebM video to show. I am 100% certain I am going to regret putting this directly on TrendingEntry, but it will work so yolo
   */
  webmVideo?: string;
  /**
   * If this is populated, the entry has a related MP4 video to show. I am 100% certain I am going to regret putting this directly on TrendingEntry, but it will work so yolo
   */
  mp4Video?: string;
  /**
   * If isFeatured, this image will be populated with whatever the featured image is. Note that this will likely be a very large image, so don't use it all the time.
   */
  featureImage?: string;
  /**
   * If the item is of entityType TrendingEntryType.Container, it may have items - also Trending Entries - contained within it. This is the ordered list of those to display under the Container's header.
   */
  items?: Array<Entry>;
  /**
   * If the entry has a date at which it was created, this is that date.
   */
  creationDate?: Date;
}
