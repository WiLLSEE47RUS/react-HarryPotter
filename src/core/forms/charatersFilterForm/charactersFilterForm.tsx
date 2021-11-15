import { FC, SetStateAction, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Input } from '../../../components/input/input';
import { Select } from '../../../components/Select/select';
import { useDictionariesFetch } from '../../../hooks/useDictionariesFetch';
import { setFiltersData } from '../../../store/characters/charactersSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { AddButton } from '../../components/buttons/addBtn/addBtn';
import { Form, SelectContainer } from './charactersFilterForm.styled';
import { IFiltersQueryData, DictionaryTitles } from './charactersFilterForm.type';

export const CharactersFilterForm: FC = () => {
  const [initialized, setInitialized] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState<string[]>([]);
  const [raceFilter, setRaceFilter] = useState<string[]>([]);
  const [sideFilter, setSideFilter] = useState<string[]>([]);

  const history = useHistory();
  const state = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();

  const { loading: selectsLoading, error, genderDictionary, raceDictionary, sideDictionary } = useDictionariesFetch();
  //Передача параметров в URL
  useEffect(() => {
    if (!initialized) {
      setInitialized(!initialized);
    } else if (searchTerm.length || genderFilter.length || raceFilter.length || sideFilter.length) {
      history.push(`/characters?filters=${JSON.stringify({ searchTerm, genderFilter, raceFilter, sideFilter })}`);
    } else {
      history.push('/characters');
    }
  }, [searchTerm, genderFilter, raceFilter, sideFilter]);
  //Считывание параметров с URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const queryFilters = queryParams.get('filters');
    if (queryFilters) {
      const parseQueryFilters = JSON.parse(queryFilters) as IFiltersQueryData;
      dispatch(
        setFiltersData({
          search: parseQueryFilters.searchTerm,
          gender: parseQueryFilters.genderFilter,
          race: parseQueryFilters.raceFilter,
          side: parseQueryFilters.sideFilter,
        })
      );
      if (!initialized) {
        setSearchTerm(parseQueryFilters.searchTerm);
        setGenderFilter(parseQueryFilters.genderFilter);
        setRaceFilter(parseQueryFilters.raceFilter);
        setSideFilter(parseQueryFilters.sideFilter);
      }
    } else {
      dispatch(
        setFiltersData({
          search: '',
          gender: [],
          race: [],
          side: [],
        })
      );
    }
  }, [location.search]);
  // Обработка инпута
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };
  // Обработка кнопки добавить
  const handleAddClick = (): void => {
    history.push('character/new');
  };
  // Вспомогательная функция для установки фильтров по селекту
  const setFiltered = (filter: string[], setFilter: React.Dispatch<SetStateAction<string[]>>, id: string): void => {
    if (filter.includes(id)) {
      setFilter((prev: string[]) => {
        const newValues = prev.filter((el) => el !== id);
        return newValues;
      });
    } else {
      setFilter((prev: string[]) => [...prev, id]);
    }
  };
  // Установка фильтров по селекту
  const handleSelectClick = (title: string, id: string): void => {
    switch (title) {
      case DictionaryTitles.GENDER: {
        setFiltered(genderFilter, setGenderFilter, id);
        break;
      }
      case DictionaryTitles.RACE: {
        setFiltered(raceFilter, setRaceFilter, id);
        break;
      }
      case DictionaryTitles.SIDE: {
        setFiltered(sideFilter, setSideFilter, id);
        break;
      }
    }
  };

  return (
    <Form onSubmit={(e): void => e.preventDefault()}>
      <Input placeholder="Поиск" value={state.filtersData.search} onChange={handleChange} />
      {!selectsLoading && !error && (
        <SelectContainer>
          <Select
            dictionary={genderDictionary}
            title={DictionaryTitles.GENDER}
            countChecked={state.filtersData.gender.length}
            handleSelect={handleSelectClick}
          />
          <Select
            dictionary={raceDictionary}
            title={DictionaryTitles.RACE}
            countChecked={state.filtersData.race.length}
            handleSelect={handleSelectClick}
          />
          <Select
            dictionary={sideDictionary}
            title={DictionaryTitles.SIDE}
            countChecked={state.filtersData.side.length}
            handleSelect={handleSelectClick}
          />
          <AddButton handleClick={handleAddClick}>Добавить</AddButton>
        </SelectContainer>
      )}
    </Form>
  );
};
