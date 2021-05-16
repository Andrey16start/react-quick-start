import React, { createContext, useCallback, useState } from 'react';

import { MODAL_DELAYED } from '../../config/modal';

import { AnyObject } from '../../models/global';
import { IModal, IModalContext } from '../../models/modal';


const ModalContext = createContext<IModalContext>({
  modals: [],
  closedModals: [],
  openModal: (name: string, props: AnyObject) => { },
  closeModal: (name: string) => { },
});
ModalContext.displayName = 'ModalContext';


const ModalProvider = (props: any) => {
  const [modals, setModals] = useState<IModal[]>([]);
  const [closedModals, setClosedModals] = useState<string[]>([]);

  const openModal = useCallback((name: string, props: AnyObject) => {
    const newModal = { name, props };

    setModals(prev => [...prev, newModal]);
  }, []);

  const closeModal = useCallback((name: string) => {
    setClosedModals(prev => [...prev, name]);

    setTimeout(() => {
      setModals(prev => prev.filter(modal => modal.name !== name));
      setClosedModals(prev => prev.filter(modalName => modalName !== name));
    }, MODAL_DELAYED);
  }, []);

  return (
    <ModalContext.Provider
      {...props}
      value={{
        modals,
        openModal,
        closeModal,
        closedModals,
      }}
    />
  );
};

export { ModalProvider, ModalContext };