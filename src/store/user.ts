import { EnumLang, EnumTheme, User } from '@models/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserStateType = User;

const userInitialState: UserStateType = {
  lang: EnumLang.EN,
  theme: EnumTheme.DARK
};

const userSlice = createSlice({
  initialState: userInitialState,
  name: 'user',
  reducers: {
    changeLang (state: UserStateType, { payload }: PayloadAction<EnumLang>) {
      state.lang = payload;
    },
    changeTheme (state: UserStateType, { payload }: PayloadAction<EnumTheme>) {
      state.theme = payload;
    }
  }
});

const { actions, reducer: userReducer } = userSlice;
const { changeLang, changeTheme } = actions;

export { changeLang, changeTheme, userReducer };
export type { UserStateType };
