import { SetStateAction } from 'react';
import { ISelectFilters } from '../../../../core/pages/characters/characters';
import { IOptions } from '../../select.type';

export interface IItemProps {
  option: IOptions;
  id: number;
  handler: React.Dispatch<SetStateAction<ISelectFilters>>;
  filterName: string;
}
