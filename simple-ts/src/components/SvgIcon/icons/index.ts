import { ObjectOf } from '../../../models/global';

import clear from './clear';
import eye from "./eye";
import eyeOff from "./eyeOff";


const SVG_ICONS: ObjectOf<React.FC<any>> = {
  clear,
  eye,
  eyeOff,
}

export default SVG_ICONS;