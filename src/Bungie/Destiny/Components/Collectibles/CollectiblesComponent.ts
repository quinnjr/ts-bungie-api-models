import { Component } from './Component';

export interface CollectiblesComponent {
  collectibles?: { [key: string]: Component; };
}
