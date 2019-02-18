import { RecordComponent } from './RecordComponent';

export interface CharacterRecordsComponent {
  featuredRecordHashes?: Array<number>;
  records?: { [key: string]: RecordComponent; };
}
