import { configureStore } from '@reduxjs/toolkit';

import { userReducer, UserStateType } from './user';

type StoreType = { user: UserStateType };
const store = configureStore({ reducer: { user: userReducer } });

export type { StoreType };
export default store;
