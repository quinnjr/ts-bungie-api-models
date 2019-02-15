import { ResultOfTrendingEntry } from '../Search/ResultOfTrendingEntry';

export interface Category {
  categoryName?: string;
  entries?: ResultOfTrendingEntry;
  categoryId?: string;
}
