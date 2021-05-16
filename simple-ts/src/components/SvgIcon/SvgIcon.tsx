import React from 'react';

import { ISvgIconProps } from './SvgIcon.types';

import SVG_ICONS from './icons';

const getSvgSize = (width: number, height: number) => ({ width, height });

const SvgIcon = (props: ISvgIconProps) => {
  const {
    icon,
    size,
    color = '',
    className = '',
  } = props;

  const SvgComponent = SVG_ICONS[icon];

  const svgSize = Array.isArray(size)
    ? getSvgSize(size[0], size[1])
    : getSvgSize(size, size);

  return (
    <SvgComponent
      {...svgSize}
      color={color}
      className={className}
    />
  )
}

export default SvgIcon;