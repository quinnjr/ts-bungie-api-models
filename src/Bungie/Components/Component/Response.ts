import { PrivacySetting } from './PrivacySetting';

/**
 * The base class for any component-returning object that may need to indicate information about the state of the component being returned.
 */
export interface Response {
  privacy?: PrivacySetting;
}
