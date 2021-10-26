import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './core/components/header/header';
import { GlobalStyle } from './GlobalStyle';
import Characters from './core/pages/characters/characters';
import Home from './core/pages/home/home';

export const App: FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path={'/'}>
          <Home />
        </Route>
        <Route path={'/characters'} exact>
          <Characters />
        </Route>
        <Route path={'/characters/new'} exact>
          <Characters />
        </Route>
        <Route path={'/characters/:id'} exact>
          <Characters />
        </Route>
        <Redirect to={'/'}></Redirect>
      </Switch>
      <GlobalStyle />
    </>
  );
};
