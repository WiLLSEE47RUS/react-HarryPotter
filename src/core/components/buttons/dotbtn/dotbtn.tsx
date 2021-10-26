import { FC } from 'react';
import { Dot } from './dotbtn.styled';
import { IDotBtnProps } from './dotbtn.type';

export const DotButton: FC<IDotBtnProps> = (props) => {
  return <Dot active={props.active} onClick={(): void => props.handler(props.index)} />;
};
