import { CommentSummary } from './CommentSummary';
import { Representation } from './Representation';
import { GeneralUser } from '../User/GeneralUser';

export interface ItemPublicContract {
  contentId?: number;
  cType?: string;
  cmsPath?: string;
  creationDate?: Date;
  modifyDate?: Date;
  allowComments?: boolean;
  hasAgeGate?: boolean;
  minimumAge?: number;
  ratingImagePath?: string;
  author?: GeneralUser;
  autoEnglishPropertyFallback?: boolean;
  /**
   * Firehose content is really a collection of metadata and \"properties\", which are the potentially-but-not-strictly localizable data that comprises the meat of whatever content is being shown.  As Cole Porter would have crooned, \"Anything Goes\" with Firehose properties. They are most often strings, but they can theoretically be anything. They are JSON encoded, and could be JSON structures, simple strings, numbers etc... The Content Type of the item (cType) will describe the properties, and thus how they ought to be deserialized.
   */
  properties?: { [key: string]: any; };
  representations?: Array<Representation>;
  tags?: Array<string>;
  commentSummary?: CommentSummary;
}
