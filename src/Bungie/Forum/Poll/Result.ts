export interface Result {
  answerText?: string;
  answerSlot?: number;
  lastVoteDate?: Date;
  votes?: number;
  requestingUserVoted?: boolean;
}
