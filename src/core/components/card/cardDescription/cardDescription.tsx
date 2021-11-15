import { FC } from 'react';
import { ICardProps } from '../card.type';
import { Description, DescriptionContent, ParamItem } from './cardDescription.styled';
import { ICardDescription } from './cardDescription.type';


export const CardDescription: FC<ICardDescription> = (props) => {
  return (
    <Description background={props.backgroundColor}>
      <DescriptionContent>
        <ParamItem color={props.parametersColor}>
          <p>Пол</p>
          <p>{props.gender}</p>
        </ParamItem>
        <ParamItem color={props.parametersColor}>
          <p>Раса</p>
          <p>{props.race}</p>
        </ParamItem>
        <ParamItem color={props.parametersColor}>
          <p>Сторона</p>
          <p>{props.side}</p>
        </ParamItem>
      </DescriptionContent>
    </Description>
  );
};
