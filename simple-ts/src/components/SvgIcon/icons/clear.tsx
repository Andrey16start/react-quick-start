import React from 'react';


const clear = (props: any) => {
  const color = props.color || '#AFB2C1';

  return (
    <svg {...props} viewBox="0 0 20 20" fill="none">
      <g opacity="0.5">
        <path d="M15 5L5 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 5L15 15" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

export default clear;