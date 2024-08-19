import { mediaMobile, mediaTablet, mediaWeb } from '@globals/media';
import { useState } from 'react';

function useMedia (sizeQuery: string) {
  const mediaQueryList = window.matchMedia(sizeQuery);
  const [ sw, setSw ] = useState<boolean>(mediaQueryList.matches);
  mediaQueryList.addEventListener('change', (event) => {
    setSw(event.matches);
  });
  return sw;
}

function useMediaWeb () {
  return useMedia(`(min-width: ${mediaWeb})`);
}

function useMediaTablet () {
  return useMedia(`(min-width: ${mediaTablet}) and (max-width: ${mediaWeb})`);
}

function useMediaMobile () {
  return useMedia(`(min-width: ${mediaMobile}) and (max-width: ${mediaTablet})`);
}

export {
  useMedia,
  useMediaMobile,
  useMediaTablet,
  useMediaWeb
};
