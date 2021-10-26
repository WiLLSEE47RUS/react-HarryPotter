import { FC } from 'react';
import { Arrow } from './arrowbtn.styled';
import { IArrowBtnProps } from './arrowbtn.type';

export const ArrowButton: FC<IArrowBtnProps> = (props) => {
  return (
    <Arrow
      direction={props.direction}
      onClick={(): void => {
        if (props.direction === 'forward') {
          props.handler((prev) => (prev !== props.totalPages - 1 ? prev + 1 : 0));
        } else {
          props.handler((prev) => (prev === 0 ? props.totalPages - 1 : prev - 1));
        }
      }}
    />
  );
};
