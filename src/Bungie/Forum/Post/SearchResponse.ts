import { Detail } from '../Recruitment/Detail';
import { Response as PollResponse } from '../Poll/Response';
import { Response as PostResponse } from './Response';
import { Response as GroupResponse } from '../GroupsV2/Group/Response';
import { PagedQuery } from '../../Queries/PagedQuery';
import { Response as TagResponse } from '../../Tags/Models/Contracts/Response';
import { GeneralUser } from '../../User/GeneralUser';

export interface SearchResponse {
  relatedPosts?: Array<PostResponse>;
  authors?: Array<GeneralUser>;
  groups?: Array<GroupResponse>;
  searchedTags?: Array<TagResponse>;
  polls?: Array<PollResponse>;
  recruitmentDetails?: Array<Detail>;
  availablePages?: number;
  results?: Array<PostResponse>;
  totalResults?: number;
  hasMore?: boolean;
  query?: PagedQuery;
  replacementContinuationToken?: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.  If False, it does not, and may be estimated/only the size of the current page.  Either way, you should probably always only trust hasMore.  This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
   */
  useTotalResults?: boolean;
}
