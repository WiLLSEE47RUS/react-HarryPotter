import { FC } from 'react';
import { CardDescription } from '../../card/cardDescription/cardDescription';
import { Content, ImageContent, Tag, TagsContainer, TextContent } from './heroModalContent.styled';
import closeIcon from '../../../../assets/icon_close.png';
import { IHeroModalContent } from './heroModalContent.type';

export const HeroModalContent: FC<IHeroModalContent> = (props) => {
  const { state, closeModal } = props;
  return (
    <Content onClick={(e): void => e.stopPropagation()} type = {props.type}>
      <TextContent color={state.nameColor} pcolor={state.parametersColor} type = {props.type}>
        <h1>{state.name}</h1>
        <CardDescription
          backgroundColor={state.backgroundColor}
          parametersColor={state.parametersColor}
          gender={state.gender.value}
          race={state.race.value}
          side={state.side.value}
          type = {props.type}
        />
        <article>{state.description}</article>
      </TextContent>
      <ImageContent background={state.imageURL} type = {props.type}>
        {props.type !== 'smallmodal' && (
          <button onClick={closeModal}>
            <img src={closeIcon} alt="close" />
          </button>
        )}
        <TagsContainer type = {props.type}>
          {state.tag1 && <Tag type = {props.type}>{state.tag1}</Tag>}
          {state.tag2 && <Tag type = {props.type}>{state.tag2}</Tag>}
          {state.tag3 && <Tag type = {props.type}>{state.tag3}</Tag>}
        </TagsContainer>
      </ImageContent>
    </Content>
  );
};
