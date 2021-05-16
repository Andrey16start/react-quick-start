import React, { useContext } from 'react';

import { MODAL_TYPES } from '../../config/modal';
import { ModalContext } from '../../context/ModalContext/ModalContext';

import './Example.scss';
import ExampleComponent from './components/ExampleComponents';


const Example = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <div className='example'>
      <h2>Example</h2>

      <ExampleComponent />

      <button
        className='btn'
        onClick={() => {
          console.log(2);
          openModal(MODAL_TYPES.error, { status: 400, message: 'Bad Request' })
        }}
      >
        open modal
      </button>
    </div>
  )
}

export default Example;