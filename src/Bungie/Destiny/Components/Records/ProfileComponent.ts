import { RecordComponent } from './RecordComponent';


export interface ProfileRecordsComponent {
  /**
   * Your \"Triumphs\" score.
   */
  score?: number;
  /**
   * If this profile is tracking a record, this is the hash identifier of the record it is tracking.
   */
  trackedRecordHash?: number;
  records?: { [key: string]: RecordComponent; };
}
