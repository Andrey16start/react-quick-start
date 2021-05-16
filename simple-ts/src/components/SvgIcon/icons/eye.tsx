import React from 'react';


const eye = (props: any) => {
  const color = props.color || '#8692A6';

  return (
    <svg {...props} fill="none">
      <path
        d="M1 9s2.90909-6 8-6c5.0909 0 8 6 8 6s-2.9091 6-8 6c-5.09091 0-8-6-8-6z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11c1.1046 0 2-.8954 2-2 0-1.10457-.8954-2-2-2-1.10457 0-2 .89543-2 2 0 1.1046.89543 2 2 2z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default eye;