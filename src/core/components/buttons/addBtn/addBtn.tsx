import { FC } from 'react';
import { AddBtn } from './addBtn.styled';
import { IAddButtonProps } from './addBtn.type';
export const AddButton: FC<IAddButtonProps> = (props) => {
  return <AddBtn onClick={props.handleClick}>{props.children}</AddBtn>;
};
