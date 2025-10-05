import {
  mediaMobile, mediaTablet, mediaUnits, mediaWeb
} from '@globals/media';
import { useState } from 'react';

function useMedia(sizeQuery: string) {
  const mediaQueryList = window.matchMedia(sizeQuery);
  const [sw, setSw] = useState<boolean>(mediaQueryList.matches);
  mediaQueryList.addEventListener('change', event => {
    setSw(event.matches);
  });
  return sw;
}

function useMediaMobile() {
  return useMedia(`(min-width: ${mediaMobile}${mediaUnits}) and (max-width: ${mediaTablet - 1}${mediaUnits})`);
}

function useMediaTablet() {
  return useMedia(`(min-width: ${mediaTablet}${mediaUnits}) and (max-width: ${mediaWeb - 1}${mediaUnits})`);
}

function useMediaWeb() {
  return useMedia(`(min-width: ${mediaWeb}${mediaUnits})`);
}

export {
  useMedia,
  useMediaMobile,
  useMediaTablet,
  useMediaWeb
};
