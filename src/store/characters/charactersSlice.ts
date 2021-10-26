import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { characters } from '../../core/domain/creatures/creatures';

import { ICreature } from '../../core/domain/creatures/creatures.type';

interface IFiltersData {
  search: string;
  gender: string[];
  race: string[];
  side: string[];
}

interface ICharactersState {
  registryState: ICreature[];
  isHeroModalOpen: boolean;
  isAddNewHeroModalOpen: boolean;
  filtersData: IFiltersData;
}

const initialState: ICharactersState = {
  registryState: characters,
  isHeroModalOpen: false,
  isAddNewHeroModalOpen: false,
  filtersData: {
    search: '',
    gender: [],
    race: [],
    side: [],
  },
};
export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setRegistryState: (state, action: PayloadAction<ICreature[]>) => {
      state.registryState = action.payload;
    },
    setFiltersData: (state, action: PayloadAction<IFiltersData>) => {
      state.filtersData = action.payload;
    },
    setIsHeroModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isHeroModalOpen = action.payload;
    },
    setIsAddNewHeroModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isAddNewHeroModalOpen = action.payload;
    },
  },
});
export const { setRegistryState, setFiltersData, setIsHeroModalOpen, setIsAddNewHeroModalOpen } = charactersSlice.actions;
