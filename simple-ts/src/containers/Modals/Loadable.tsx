import { lazy } from 'react';


const ErrorModal = lazy(() => import(/* webpackChunkName: "ErrorModalChunk" */ './components/ErrorModal/ErrorModal'));


export const Loadable = {
  ErrorModal,
}