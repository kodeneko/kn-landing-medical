import { Sections } from '@models/app';
import { EnumLang, EnumTheme, User } from '@models/index';
import { create } from 'zustand';

type RefReact = React.RefObject<HTMLDivElement>;
interface UserStateType extends User {
  changeLang: (lang: EnumLang) => void
  changeTheme: (theme: EnumTheme) => void
  refSections: {
    [Sections.CONTACT]?: RefReact
    [Sections.DOCTORS]?: RefReact
    [Sections.INFO]?: RefReact
    [Sections.PRICING]?: RefReact
    [Sections.SERVICES]?: RefReact
    [Sections.WELCOME]?: RefReact
  }
  scrollToSection: (section: Sections) => void
  setRef: (section: Sections, ref: RefReact) => void
}

const useUser = create<UserStateType>((set, get) => ({
  changeLang: (lang: EnumLang) => set(state => ({
    ...state,
    lang
  })),
  changeTheme: (theme: EnumTheme) => set(state => ({
    ...state,
    theme
  })),
  lang: EnumLang.EN,
  refSections: {
    [Sections.CONTACT]: undefined,
    [Sections.DOCTORS]: undefined,
    [Sections.INFO]: undefined,
    [Sections.PRICING]: undefined,
    [Sections.SERVICES]: undefined,
    [Sections.WELCOME]: undefined
  },
  scrollToSection: (section: Sections) => {
    get().refSections[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  },
  setRef: (section: Sections, ref: RefReact) => {
    const refs = get().refSections;
    const refSections = { ...refs, [section]: ref };
    set(state => ({
      ...state,
      refSections
    }));
  },
  theme: EnumTheme.DARK
}));

export default useUser;
export type {
  RefReact
};
