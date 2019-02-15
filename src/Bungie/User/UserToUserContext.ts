import { IgnoreResponse } from '../Ignores/IgnoreResponse';

export interface UserToUserContext {
  isFollowing?: boolean;
  ignoreStatus?: IgnoreResponse;
  globalIgnoreEndDate?: Date;
}
