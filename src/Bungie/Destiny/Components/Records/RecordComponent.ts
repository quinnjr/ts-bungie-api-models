import { RecordState } from '../../Record/RecordState';
import { ObjectiveProgress } from '../../Quests/ObjectiveProgress';

export interface RecordComponent {
  state?: RecordState;
  objectives?: Array<ObjectiveProgress>;
}
