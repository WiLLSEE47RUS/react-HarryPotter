import { FC, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { setIsHeroModalOpen } from '../../../store/characters/charactersSlice';

import { CharactersForm } from '../../forms/charatersForm/charactersForm';
import { Registry } from '../../registry/registry';
import { Content, Wrapper } from './characters.style';
import { HeroModal } from '../../components/heroModal/heroModal';

export interface ISelectFilters {
  gender: string[];
  race: string[];
  side: string[];
}

const Characters: FC = () => {
  const state = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();
  const { id: queryID } = useParams<{ id: string }>();

  const path = window.location.pathname;

  useEffect(() => {
    if (path === '/characters/new') {
      // dispatch(setIsAddNewHeroModalOpen(true));
      alert('Модалка с созданием персонажа');
    }
    console.log(path);
  }, [path]);

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
    if (queryID) {
      dispatch(setIsHeroModalOpen(true));
    }
  }, [queryID]);

  return (
    <Wrapper>
      <Content>
        <CharactersForm />
        <Registry />
      </Content>
      {state.isHeroModalOpen && <HeroModal id={queryID} />}
    </Wrapper>
  );
};
export default Characters;
