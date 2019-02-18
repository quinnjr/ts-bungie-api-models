import { DeveloperRole } from './DeveloperRole';
import { InfoCard } from '../User/InfoCard';

export interface ApplicationDeveloper {
  role?: DeveloperRole;
  apiEulaVersion?: number;
  user?: InfoCard;
}
