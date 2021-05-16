import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { ROUTES } from '../../config/routes';

import Spinner from '../../components/Spinner/Spinner';
import { Loadable } from './Loadable';



const fallback = <Spinner size={15} />


const MainPage = () => {
  return (
    <Suspense fallback={fallback}>
      <Switch>
        <Route path={ROUTES.main} component={Loadable.Example} />

        <Redirect to={ROUTES.main} />
      </Switch>
    </Suspense>
  )
}

export default MainPage;