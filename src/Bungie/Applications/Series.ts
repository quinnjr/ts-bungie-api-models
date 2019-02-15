import { Datapoint } from './Datapoint';

export interface Series {
  /**
   * Collection of samples with time and value.
   */
  datapoints?: Array<Datapoint>;
  /**
   * Target to which to datapoints apply.
   */
  target?: string;
}
