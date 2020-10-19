import { ITeamAttributes, ITeamAttributesPresentationalModel } from './team-attributes.model';

export interface ITeamBlockItem {
  type: string;
  id: number;
  attributes: ITeamAttributes;
}

export interface ITeamBlockItemPresentationalModel {
  id: number;
  attributes: ITeamAttributesPresentationalModel;
}

