import { FC } from 'react';
import { useHeroFetch } from '../../../hooks/useHeroFetch';
import { Wrapper } from './heroModal.styled';
import { IHeroModal } from './heroModal.type';

import { Spinner } from '../../../components/Spinner/Spinner.styled';
import { HeroModalContent } from './heroModalContent/heroModalContent';
import { useAppDispatch } from '../../../store/store';
import { useHistory } from 'react-router';
import { setIsHeroModalOpen } from '../../../store/characters/charactersSlice';

export const HeroModal: FC<IHeroModal> = (props) => {
  const { state, loading, error } = useHeroFetch(props.id);

  const dispatch = useAppDispatch();
  const history = useHistory();
  const closeModal = (): void => {
    dispatch(setIsHeroModalOpen(false));
    history.goBack();
  };

  if (error) {
    return <div>Something Did wrong...</div>;
  }
  return (
    <Wrapper onClick={closeModal}>
      {(!loading && <HeroModalContent state={state} closeModal={closeModal} />) || <Spinner />}
    </Wrapper>
  );
};
