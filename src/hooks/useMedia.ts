import { mediaMobile, mediaTablet, mediaWeb } from '@globals/media';
import { useState } from 'react';

function useMedia (size: string) {
  const [ sw, setSw ] = useState<boolean>(false);
  const mediaQueryList = window.matchMedia(`(max-width: ${size})`);
  mediaQueryList.addEventListener('change', (event) => {
    setSw(event.matches);
  });
  return sw;
}

function useMediaMobile () {
  return useMedia(mediaMobile);
}

function useMediaTablet () {
  return useMedia(mediaTablet);
}

function useMediaWeb () {
  return useMedia(mediaWeb);
}

export {
  useMedia,
  useMediaMobile,
  useMediaTablet,
  useMediaWeb
};
