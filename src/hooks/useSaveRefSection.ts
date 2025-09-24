import { Sections } from '@models/app';
import { RefReact, useUser } from '@store/zustand';
import { useEffect } from 'react';

function useSaveRefSection(ref: RefReact) {
  const setRef = useUser(state => state.setRef);
  useEffect(() => {
    setRef(Sections.CONTACT, ref);
  }, [ref, setRef]);
}

export default useSaveRefSection;
