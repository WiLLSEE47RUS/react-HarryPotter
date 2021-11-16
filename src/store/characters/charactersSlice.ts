import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICreature } from '../../core/domain/creatures/creatures.type';

export interface IFiltersData {
  search: string;
  gender: string[];
  race: string[];
  side: string[];
}
export interface ISelectDictionaryItem {
  id: string;
  value: string;
}

interface ICharactersState {
  registryState: ICreature[];
  isHeroModalOpen: boolean;
  isAddNewHeroModalOpen: boolean;
  genderDictionary: ISelectDictionaryItem[];
  raceDictionary: ISelectDictionaryItem[];
  sideDictionary: ISelectDictionaryItem[];
  filtersData: IFiltersData;
}

const initialState: ICharactersState = {
  registryState: [],
  isHeroModalOpen: false,
  isAddNewHeroModalOpen: false,
  genderDictionary: [],
  raceDictionary: [],
  sideDictionary: [],
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
    setGenderDictionary: (state, action: PayloadAction<ISelectDictionaryItem[]>) =>{
      state.genderDictionary = action.payload;
    },
    setRaceDictionary: (state, action: PayloadAction<ISelectDictionaryItem[]>) =>{
      state.raceDictionary = action.payload;
    },
    setSideDictionary: (state, action: PayloadAction<ISelectDictionaryItem[]>) =>{
      state.sideDictionary = action.payload;
    }
  },
});
export const { setRegistryState, setFiltersData, setIsHeroModalOpen, setIsAddNewHeroModalOpen, setGenderDictionary, setRaceDictionary, setSideDictionary } =
  charactersSlice.actions;
