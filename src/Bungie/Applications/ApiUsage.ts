import { Series } from './Series';
import { DateRange } from '../DateRange';

export interface ApiUsage {
  /**
   * The date range for the data being reported.
   */
  range?: DateRange;
  /**
   * Counts for on API calls made for the time range.
   */
  apiCalls?: Array<Series>;
  /**
   * Instances of blocked requests or requests that crossed the warn threshold during the time range.
   */
  throttledRequests?: Array<Series>;
}
