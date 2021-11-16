import { FC, useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { setIsAddNewHeroModalOpen, setIsHeroModalOpen } from '../../../store/characters/charactersSlice';

import { CharactersFilterForm } from '../../forms/charatersFilterForm/charactersFilterForm';
import { Registry } from '../../registry/registry';
import { AddNewCharacterForm } from '../../forms/addNewCharacterForm/addNewCharacterForm'
import { Content, Wrapper } from './characters.style';
import { HeroModal } from '../../components/heroModal/heroModal';

const Characters: FC = () => {
  const state = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();
  const { id: queryID } = useParams<{ id: string }>();

  const path = window.location.pathname;

  useEffect(() => {
    if (path === '/characters/new') {
      dispatch(setIsAddNewHeroModalOpen(true));
    }
    console.log(path);
  }, [path]);
  
  useEffect(() => {
    if (queryID) {
      dispatch(setIsHeroModalOpen(true));
    }
  }, [queryID]);

  return (
    <Wrapper>
      <Content>
        <CharactersFilterForm />
        <Registry />
      </Content>
      {state.isHeroModalOpen && <HeroModal id={queryID} />}
      {state.isAddNewHeroModalOpen && <AddNewCharacterForm />}
    </Wrapper>
  );
};
export default Characters;
