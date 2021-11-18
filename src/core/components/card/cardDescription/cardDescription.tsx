import { FC } from 'react';
import { Description, DescriptionContent, ParamItem } from './cardDescription.styled';
import { ICardDescription } from './cardDescription.type';


export const CardDescription: FC<ICardDescription> = (props) => {
  return (
    <Description background={props.backgroundColor} type = {props.type}>
      <DescriptionContent>
        <ParamItem color={props.parametersColor} type = {props.type}>
          <p>Пол</p>
          <p>{props.gender}</p>
        </ParamItem>
        <ParamItem color={props.parametersColor} type = {props.type}>
          <p>Раса</p>
          <p>{props.race}</p>
        </ParamItem>
        <ParamItem color={props.parametersColor} type = {props.type}>
          <p>Сторона</p>
          <p>{props.side}</p>
        </ParamItem>
      </DescriptionContent>
    </Description>
  );
};
