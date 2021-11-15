import { FC } from 'react';
import { InputComponent } from './input.styled';
import { IInput } from './input.type';

export const Input: FC<IInput> = (props) => {
  return <InputComponent placeholder={props.placeholder} value={props.value} onChange={props.onChange} />;
};
