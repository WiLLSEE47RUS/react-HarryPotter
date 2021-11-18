import { ICreature } from '../core/domain/creatures/creatures.type';

export interface ICharacterFetch {
  content: ICreature[];
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  totalElements: number;
  totalPages: number;
}
