import { IMemberCardBlock, IMemberCardBlockPresentationalModel } from './member-card-block.model';

export interface ITeamAttributes {
  title: string;
  memberCards: { [name: string]: IMemberCardBlock }[];
}

export interface ITeamAttributesPresentationalModel {
  title: string;
  memberCards: IMemberCardBlockPresentationalModel[];
}
