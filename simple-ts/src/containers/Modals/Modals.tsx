import React, { useContext } from 'react';
import ReactDOM from "react-dom";

import { MODAL_TYPES } from '../../config/modal';
import { ModalContext } from '../../context/ModalContext/ModalContext';

import { Loadable } from './Loadable';
import Modal from './components/Modal';


const MODAL_COMPONENTS = {
  [MODAL_TYPES.error]: Loadable.ErrorModal,
}


const Modals = () => {
  const { modals } = useContext(ModalContext);

  const modalRoot = document.getElementById("modal-root");

  return modalRoot && (
    ReactDOM.createPortal(
      modals.map(modal =>
        <Modal
          key={modal.name}
          modal={modal}
          Component={MODAL_COMPONENTS[modal.name]}
        />
      ),
      modalRoot
    )
  )
}

export default Modals;