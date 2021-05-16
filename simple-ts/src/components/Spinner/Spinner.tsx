import React from 'react';

import { ISpinnerProps } from './Spinner.types';


const Spinner = (props: ISpinnerProps) => {
  const {
    size = 30,
    color = 'black',
    className = '',
    style = {},
  } = props;

  return (
    <div
      className={`spinner spinner--${color} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...style,
      }}
    />
  )
};

export default Spinner;