import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { AddBtn } from './addBtn.styled';
export const AddButton: FC = (props) => {
  const history = useHistory();
  return <AddBtn onClick={(): void => history.push('/characters/new')}>{props.children}</AddBtn>;
};
