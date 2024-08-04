import { useState } from 'react';

function useMedia () {
  const [ sw, setSw ] = useState<boolean>(false);
  const mediaQueryList = window.matchMedia('(max-width: 800px)');
  mediaQueryList.addEventListener('change', (event) => {
    setSw(event.matches);
  });
  return sw;
}

export default useMedia;
