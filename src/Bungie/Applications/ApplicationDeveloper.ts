import { DeveloperRole } from './DeveloperRole';
import { UserInfoCard } from '../User/UserInfoCard';

export interface ApplicationDeveloper {
  role?: DeveloperRole;
  apiEulaVersion?: number;
  user?: UserInfoCard;
}
