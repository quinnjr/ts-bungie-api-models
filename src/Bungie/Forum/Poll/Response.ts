import { Result } from './Result';

export interface Response {
  topicId?: number;
  results?: Array<Result>;
  totalVotes?: number;
}
