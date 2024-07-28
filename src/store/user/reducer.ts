import { EnumLang, EnumTheme, User } from '@models/user';
import { createReducer } from '@reduxjs/toolkit';

import { changeLang, changeTheme } from './actions';

type UserStateType = User;

const UserInitialState: UserStateType = {
  lang: EnumLang.EN,
  theme: EnumTheme.DARK
};

const userReducer = createReducer(UserInitialState, (builder) => {
  builder
    .addCase(changeLang, (state, { payload }) => {
      state.lang = payload;
    })
    .addCase(changeTheme, (state, { payload }) => {
      state.theme = payload;
    });
});

export default userReducer;
