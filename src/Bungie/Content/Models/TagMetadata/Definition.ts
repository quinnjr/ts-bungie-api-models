import { Item } from './Item';

export interface Definition {
  description?: string;
  order?: number;
  items?: Array<Item>;
  datatype?: string;
  name?: string;
  isRequired?: boolean;
}
