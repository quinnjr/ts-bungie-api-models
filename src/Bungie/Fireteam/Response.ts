import { Member } from './Member';
import { Summary } from './Summary';

export interface Response {
  summary?: Summary;
  members?: Array<Member>;
  alternates?: Array<Member>;
}
