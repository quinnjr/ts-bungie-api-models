import { ItemPeerView } from './ItemPeerView';

/**
 * A minimal view of a character's equipped items, for the purpose of rendering a summary screen or showing the character in 3D.
 */
export interface PeerView {
  equipment?: Array<ItemPeerView>;
}
