import { FC } from 'react';
import { useHistory } from 'react-router';
import { TitleContainer, Wrapper, Title, Description, DescriptionContent, ParamItem } from './card.styled';
import { ICardProps } from './card.type';

export const Card: FC<ICardProps> = (props) => {
  const history = useHistory();
  return (
    <Wrapper onClick = {():void=>{
      history.push(`/characters/${props.creature.id}`);
    }}>
      <TitleContainer img={props.creature.img}>
        <Title color={props.creature.nameColor}>{props.creature.name}</Title>
      </TitleContainer>
      <Description background={props.creature.descBackgroundColor}>
        <DescriptionContent>
          <ParamItem color = {props.creature.textColor}>
            <p>Пол</p>
            <p>{props.creature.gender}</p>
          </ParamItem>
          <ParamItem color = {props.creature.textColor}>
            <p>Раса</p>
            <p>{props.creature.race}</p>
          </ParamItem>
          <ParamItem color = {props.creature.textColor}>
            <p>Сторона</p>
            <p>{props.creature.side}</p>
          </ParamItem>
        </DescriptionContent>
      </Description>
    </Wrapper>
  );
};
