import { EnumLang, EnumTheme, User } from '@models/index';
import { create } from 'zustand';

type UserStateType = User;
const userInitialState: UserStateType = {
  lang: EnumLang.EN,
  theme: EnumTheme.DARK
};

const useUser = create<UserStateType>((set) => ({
  ...userInitialState,
  changeLang: (lang: EnumLang) => set((state) => ({
    ...state,
    lang
  })),
  changeTheme: (theme: EnumTheme) => set((state) => ({
    ...state,
    theme
  }))
}));

export default useUser;
