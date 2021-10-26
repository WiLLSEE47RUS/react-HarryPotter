import { FC } from 'react';
import { Wrapper, NavBar } from './header.styled';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Header: FC = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" />
      <NavBar>
        <Link to="/">Главная</Link>
        <Link to="/characters">Персонажи</Link>
      </NavBar>
    </Wrapper>
  );
};
export default Header;
