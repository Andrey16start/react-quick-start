export interface ISvgIconProps {
  icon: SvgIconType;
  size: number | [number, number];
  color?: string;
  className?: string;
}

export type SvgIconType =
  'clear' |
  'eye' |
  'eyeOff'
  ;