import { MediaType } from '../MediaType';
import { Popularity } from './Popularity';
import { IgnoreResponse } from '../../Ignores/IgnoreResponse';

export interface Response {
  lastReplyTimestamp?: Date;
  isPinned?: boolean;
  urlMediaType?: MediaType;
  thumbnail?: string;
  popularity?: Popularity;
  isActive?: boolean;
  isAnnouncement?: boolean;
  userRating?: number;
  userHasRated?: boolean;
  userHasMutedPost?: boolean;
  latestReplyPostId?: number;
  latestReplyAuthorId?: number;
  ignoreStatus?: IgnoreResponse;
  locale?: string;
}
