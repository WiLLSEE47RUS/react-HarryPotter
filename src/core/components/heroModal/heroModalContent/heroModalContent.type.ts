import { IHero } from '../../../../hooks/useHeroFetch';

export interface IHeroModalContent {
  state: Omit<IHero, 'id'>;
  closeModal?: React.MouseEventHandler<HTMLButtonElement>;
  type?: string;
}
