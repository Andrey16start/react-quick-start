import { lazy } from 'react';


const Example = lazy(() => import(/* webpackChunkName: "ExchangeChunk" */ '../../containers/Example/Example'));

export const Loadable = {
  Example,
}