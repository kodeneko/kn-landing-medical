import { Sections } from '@models/app';
import { RefReact, useUser } from '@store/zustand';
import { useEffect } from 'react';

function useSaveRefSection(ref: RefReact, section: Sections) {
  const setRef = useUser(state => state.setRef);
  useEffect(() => {
    setRef(section, ref);
  }, [ref, setRef, section]);
}

export default useSaveRefSection;
