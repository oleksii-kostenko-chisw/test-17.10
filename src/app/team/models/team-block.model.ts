import { ITeamAttributes, ITeamAttributesVM } from './team-attributes.model';

export interface ITeamBlockItem {
  type: string;
  id: number;
  attributes: ITeamAttributes;
}

export interface ITeamBlockItemVM {
  id: number;
  attributes: ITeamAttributesVM;
}
