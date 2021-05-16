import React from 'react';

import './ErrorModal.scss';
import SvgIcon from '../../../../components/SvgIcon/SvgIcon';


const ErrorModal = (props: any) => {
  const {
    status,
    message,
    closeModal,
  } = props;

  return (
    <div className='error-modal'>
      <button
        className="modal__close"
        onClick={closeModal}
      >
        <SvgIcon icon='clear' size={20} />
      </button>

      <div className="error-modal__content">
        <h3 className='error-modal__title'>Error {status}</h3>

        <p className='error-modal__subtitle'>{message}</p>
      </div>
    </div>
  )
}

export default ErrorModal;