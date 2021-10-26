import React, { SetStateAction } from 'react';
import { ISelectFilters } from '../../pages/characters/characters';

export interface ICharactersFormProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<SetStateAction<string>>;
  setSelectFilters: React.Dispatch<SetStateAction<ISelectFilters>>;
}
