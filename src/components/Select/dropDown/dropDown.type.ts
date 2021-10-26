import { SetStateAction } from 'react';
import { ISelectFilters } from '../../../core/pages/characters/characters';
import { IOptions } from '../select.type';

export interface IDropDownProps {
  options: IOptions[];
  handler: React.Dispatch<SetStateAction<ISelectFilters>>;
  filterName: string;
}
