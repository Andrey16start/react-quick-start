import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { ROUTES } from './config/routes';
import { ModalProvider } from './context/ModalContext/ModalContext';

import MainPage from './pages/MainPage/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Modals from './containers/Modals/Modals';


const App = () => {
  return (
    <ModalProvider>
      <>
        <Modals />

        <Switch>
          <Route path={ROUTES.notFound} component={NotFoundPage} />
          <Route path={ROUTES.main} component={MainPage} />

          <Redirect to={ROUTES.notFound} />
        </Switch>
      </>
    </ModalProvider>
  );
}

export default App;
