import { useState, useEffect } from 'react';


type CheckType = 'IS_LESS_THAN' | 'IS_GREATER_THAN';


export default (type: CheckType, size: number) => {
  const [value, setValue] = useState<boolean>(
    type === 'IS_GREATER_THAN'
      ? window.innerWidth >= size
      : window.innerWidth <= size
  );

  useEffect(() => {
    const onResize = () => setValue(type === 'IS_GREATER_THAN'
      ? window.innerWidth >= size
      : window.innerWidth <= size
    );
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [size, type]);

  return value;
}
/*
  Usage Example:

  const isDesktop = useCheckWindowSize('IS_GREATER_THAN', MEDIA_SIZES.desktop);

  const isMobile = useCheckWindowSize('IS_LESS_THAN', MEDIA_SIZES.miniTablet)
*/