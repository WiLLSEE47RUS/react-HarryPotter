import { ICreature } from '../../domain/creatures/creatures.type';

export interface ICardProps {
  creature: ICreature;
  type?: string;
}
