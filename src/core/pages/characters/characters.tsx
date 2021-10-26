import { FC, useState, useEffect } from 'react';

import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import {
  setFiltersData,
  // setIsAddNewHeroModalOpen,
  setIsHeroModalOpen,
} from '../../../store/characters/charactersSlice';

import { CharactersForm } from '../../forms/charatersForm/charactersForm';
import { Registry } from '../../registry/registry';
import { Content, Wrapper } from './characters.style';

export interface ISelectFilters {
  gender: string[];
  race: string[];
  side: string[];
}

const Characters: FC = () => {
  const state = useAppSelector((state) => state.characters);
  const characters = state.registryState;
  const dispatch = useAppDispatch();

  const { id: queryID } = useParams<{ id?: string }>();

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(characters);
  const [selectFilters, setSelectFilters] = useState<ISelectFilters>({
    gender: [],
    race: [],
    side: [],
  });

  const history = useHistory();

  useEffect(() => {
    if (searchTerm.length || selectFilters.gender.length || selectFilters.race.length || selectFilters.side.length) {
      dispatch(
        setFiltersData({
          search: searchTerm,
          gender: [...selectFilters.gender],
          race: [...selectFilters.race],
          side: [...selectFilters.side],
        })
      );
      history.push(`/characters?filters=${JSON.stringify(state.filtersData)}`);
    } else {
      history.push('/characters');
      dispatch(
        setFiltersData({
          search: '',
          gender: [],
          race: [],
          side: [],
        })
      );
    }
  }, [searchTerm, selectFilters]);


  // useEffect(() => {
  //   const queryParams = new URLSearchParams(location.search);
  //   const queryFilters = queryParams.get('filters');

  //   if (queryFilters) {
  //     const parseQueryFilters = JSON.parse(queryFilters) as IFiltersData;
  //     console.log(parseQueryFilters);
  //     dispatch(setFiltersData(parseQueryFilters));
  //   }
  // }, []);


  useEffect(() => {
    // if (state.filtersData.search !== '') {
    //   const filteredArray = characters.filter((el) => el.name.toUpperCase().includes(searchTerm.toUpperCase()));
    //   setFilteredData(filteredArray);
    //   history.push(`/characters?name=${searchTerm}`);
    // } else {
    //   setFilteredData(characters);
    //   history.push('/characters');
    // }
    const filteredArray = characters.filter((el) => {
      console.log(state.filtersData.gender);
      if (
        el.name.toLowerCase().includes(state.filtersData.search.toLowerCase()) &&
        (state.filtersData.gender.length ? state.filtersData.gender.includes(el.gender.toLowerCase()) : true) &&
        (state.filtersData.race.length ? state.filtersData.race.includes(el.race.toLowerCase()) : true) &&
        (state.filtersData.side.length ? state.filtersData.side.includes(el.side.toLowerCase()) : true)
      ) {
        return true;
      }
    });
    console.log(filteredArray);
    setFilteredData(filteredArray);
  }, [state.filtersData]);

  useEffect(() => {
    if (location.pathname === '/characters/new') {
      // dispatch(setIsAddNewHeroModalOpen(true));
      alert('Модалка с созданием персонажа');
    }
  }, []);

  useEffect(() => {
    if (queryID) {
      dispatch(setIsHeroModalOpen(true));
      alert(
        Object.entries(characters.find((creature) => creature.id === queryID) ?? {}).reduce(
          (accum, [key, value]) => (typeof value === 'string' ? (accum = accum + `${key}: ${value} `) : accum),
          ''
        ) ?? 'Персонажа с таким ID не существует'
      );
    }
  }, [queryID]);

  return (
    <Wrapper>
      <Content>
        <CharactersForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSelectFilters={setSelectFilters} />
        <Registry creatures={filteredData} />
      </Content>
    </Wrapper>
  );
};
export default Characters;
