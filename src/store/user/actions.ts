import { EnumLang, EnumTheme } from '@models/user';
import { createAction } from '@reduxjs/toolkit';

const changeLang = createAction<EnumLang>('CHANGE_LANG');
const changeTheme = createAction<EnumTheme>('CHANGE_THEME');

export {
  changeLang,
  changeTheme
};
