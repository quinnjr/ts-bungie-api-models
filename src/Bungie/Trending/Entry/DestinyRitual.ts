import { Content } from '../../Destiny/Milestones/Content';
import { PublicMilestone } from '../../Destiny/Milestones/PublicMilestone';

export interface DestinyRitual {
  image?: string;
  icon?: string;
  title?: string;
  subtitle?: string;
  dateStart?: Date;
  dateEnd?: Date;
  /**
   * A destiny event does not necessarily have a related Milestone, but if it does the details will be returned here.
   */
  milestoneDetails?: PublicMilestone;
  /**
   * A destiny event will not necessarily have milestone \"custom content\", but if it does the details will be here.
   */
  eventContent?: Content;
}
