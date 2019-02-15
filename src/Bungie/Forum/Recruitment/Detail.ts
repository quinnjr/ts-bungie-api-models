import { IntensityLabel } from './IntensityLabel';
import { ToneLabel } from './ToneLabel';
import { GeneralUser } from '../../User/GeneralUser';

export interface Detail {
  topicId?: number;
  microphoneRequired?: boolean;
  intensity?: IntensityLabel;
  tone?: ToneLabel;
  approved?: boolean;
  conversationId?: number;
  playerSlotsTotal?: number;
  playerSlotsRemaining?: number;
  fireteam?: Array<GeneralUser>;
  kickedPlayerIds?: Array<number>;
}
