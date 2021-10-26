import { SetStateAction } from 'react';
import { ISelectFilters } from '../../core/pages/characters/characters';

export interface ISelect {
  title: string;
  options: IOptions[];
}

export interface ISelectProps extends ISelect{
    setSelectFilters: React.Dispatch<SetStateAction<ISelectFilters>>;
}

export interface IOptions {
  title: string;
  checked: boolean;
}
