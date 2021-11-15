import { FC } from 'react';
import { useHistory } from 'react-router';
import { useHeroFetch } from '../../../hooks/useHeroFetch';
import { setIsHeroModalOpen } from '../../../store/characters/charactersSlice';
import { useAppDispatch } from '../../../store/store';
import { CardDescription } from '../card/cardDescription/cardDescription';
import { Content, ImageContent, Tag, TagsContainer, TextContent, Wrapper } from './heroModal.styled';
import { IHeroModal } from './heroModal.type';
import closeIcon from '../../../assets/icon_close.png'
import { Spinner } from '../../../components/Spinner/Spinner.styled';

export const HeroModal: FC<IHeroModal> = (props) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const closeModal = (): void => {
    dispatch(setIsHeroModalOpen(false));
    history.push('/characters');
  };
  const { state, loading, error } = useHeroFetch(props.id);

  return (
    <Wrapper onClick={closeModal}>
     {!loading && (<Content onClick={(e): void => e.stopPropagation()}>
        <TextContent color={state.nameColor} pcolor = {state.parametersColor}>
          <h1>{state.name}</h1>
          <CardDescription
            backgroundColor={state.backgroundColor}
            parametersColor={state.parametersColor}
            gender={state.gender.value}
            race={state.race.value}
            side={state.side.value}
          />
          <article>{state.description}</article>
        </TextContent>
        <ImageContent background = {state.imageURL}>
            <button onClick = {closeModal}>
              <img src={closeIcon} alt="close" />
            </button>
            <TagsContainer>
              {state.tag1 && <Tag>{state.tag1}</Tag>}
              {state.tag2 && <Tag>{state.tag2}</Tag>}
              {state.tag3 && <Tag>{state.tag3}</Tag>}
            </TagsContainer>
        </ImageContent>
      </Content>) || <Spinner/>}
    </Wrapper>
  );
};
