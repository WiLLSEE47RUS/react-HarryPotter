import { FC } from 'react';
import { useHistory } from 'react-router';
import { TitleContainer, Wrapper, Title } from './card.styled';
import { ICardProps } from './card.type';
import { CardDescription } from './cardDescription/cardDescription';

export const Card: FC<ICardProps> = (props) => {
  const history = useHistory();
  return (
    <Wrapper
      onClick={(): void => {
        history.push(`/characters/${props.creature.id}`);
      }}
    >
      <TitleContainer img={props.creature.imageURL}>
        <Title color={props.creature.nameColor}>{props.creature.name}</Title>
      </TitleContainer>
      <CardDescription
        backgroundColor={props.creature.backgroundColor}
        parametersColor={props.creature.parametersColor}
        gender={props.creature.gender}
        race={props.creature.race}
        side={props.creature.side}
      />
    </Wrapper>
  );
};
