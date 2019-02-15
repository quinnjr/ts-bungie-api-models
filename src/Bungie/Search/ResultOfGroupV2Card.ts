import { Card } from '../GroupsV2/GroupV2/Card';
import { PagedQuery } from '../Queries/PagedQuery';

export interface ResultOfGroupV2Card {
  results?: Array<Card>;
  totalResults?: number;
  hasMore?: boolean;
  query?: PagedQuery;
  replacementContinuationToken?: string;
  /**
   * If useTotalResults is true, then totalResults represents an accurate count.  If False, it does not, and may be estimated/only the size of the current page.  Either way, you should probably always only trust hasMore.  This is a long-held historical throwback to when we used to do paging with known total results. Those queries toasted our database, and we were left to hastily alter our endpoints and create backward- compatible shims, of which useTotalResults is one.
   */
  useTotalResults?: boolean;
}
