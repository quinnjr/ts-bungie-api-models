import {
  CommunityCreation, CommunityStream, DestinyActivity,
  DestinyItem, DestinyRitual, News,
  SupportArticle, Type
} from './Entry';

export interface TrendingTrendingDetail {
  identifier?: string;
  entityType?: Type;
  news?: News;
  support?: SupportArticle;
  destinyItem?: DestinyItem;
  destinyActivity?: DestinyActivity;
  destinyRitual?: DestinyRitual;
  creation?: CommunityCreation;
  stream?: CommunityStream;
}
