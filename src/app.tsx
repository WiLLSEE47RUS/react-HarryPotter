import { FC } from 'react';
import Header from './core/components/header/header';
import { GlobalStyle } from './GlobalStyle';
import { RouteSwitcher } from './routeSwitcher';


export const App: FC = () => {
  return (
    <>
      <Header />
      <RouteSwitcher/>
      <GlobalStyle />
    </>
  );
};
