import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Input } from '../../../components/input/input';
import { Select } from '../../../components/Select/select';
import { useDictionariesFetch } from '../../../hooks/useDictionariesFetch';
import { setFiltersData } from '../../../store/characters/charactersSlice';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { AddButton } from '../../components/buttons/addBtn/addBtn';
import { Form, SelectContainer } from './charactersForm.styled';

export enum DictionaryTitles {
  GENDER = 'Пол',
  RACE = 'Раса',
  SIDE = 'Сторона',
}

export const CharactersForm: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState<string[]>([]);
  const [raceFilter, setRaceFilter] = useState<string[]>([]);
  const [sideFilter, setSideFilter] = useState<string[]>([]);

  const state = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();

  const history = useHistory();

  const { loading: selectsLoading, error, genderDictionary, raceDictionary, sideDictionary } = useDictionariesFetch();

  useEffect(() => {
    if (searchTerm) {
      dispatch(
        setFiltersData({
          search: searchTerm,
          gender: [...genderFilter],
          race: [...raceFilter],
          side: [...sideFilter],
        })
      );
      history.push(`/characters?filters=${searchTerm}`);
    } else {
      history.push('/characters');
      dispatch(
        setFiltersData({
          search: '',
          gender: [...genderFilter],
          race: [...raceFilter],
          side: [...sideFilter],
        })
      );
    }
    console.log(searchTerm);
  }, [searchTerm, genderFilter, raceFilter, sideFilter]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const handleAddClick = (): void => {
    history.push('character/new');
  };

  const handleSelectClick = (title: string, id: string): void => {
    switch (title) {
      case DictionaryTitles.GENDER: {
        if (genderFilter.includes(id)) {
          setGenderFilter((prev) => {
            const newValues = prev.filter((el) => el !== id);
            return newValues;
          });
        } else {
          setGenderFilter((prev) => [...prev, id]);
        }
        break;
      }
      case DictionaryTitles.RACE: {
        if (raceFilter.includes(id)) {
          setRaceFilter((prev) => {
            const newValues = prev.filter((el) => el !== id);
            return newValues;
          });
        } else {
          setRaceFilter((prev) => [...prev, id]);
        }
        break;
      }
      case DictionaryTitles.SIDE: {
        if (sideFilter.includes(id)) {
          setSideFilter((prev) => {
            const newValues = prev.filter((el) => el !== id);
            return newValues;
          });
        } else {
          setSideFilter((prev) => [...prev, id]);
        }
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
