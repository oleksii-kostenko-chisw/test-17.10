import {
  IMemberCardBlock,
  IMemberCardBlockVM,
} from './member-card-block.model';

export interface ITeamAttributes {
  title: string;
  memberCards: { [name: string]: IMemberCardBlock };
}

export interface ITeamAttributesVM {
  title: string;
  memberCards: IMemberCardBlockVM[];
}
