import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './button.styled';
import { IButtonProps } from './button.type';

const Button: FC<IButtonProps> = (props) => {
  return (
    <Link to={props.link}>
      <Wrapper>{props.text}</Wrapper>
    </Link>
  );
};
export default Button;
