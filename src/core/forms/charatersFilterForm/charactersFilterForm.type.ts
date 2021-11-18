export enum DictionaryTitles {
  GENDER = 'Пол',
  RACE = 'Раса',
  SIDE = 'Сторона',
}

export interface IFiltersQueryData{
    searchTerm: string;
    genderFilter: string[];
    raceFilter: string[];
    sideFilter: string[];
}