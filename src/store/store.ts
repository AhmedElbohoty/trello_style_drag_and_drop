import { combineReducers, configureStore } from "@reduxjs/toolkit";

import appSlice from "store/slices/appSlice/slice";

const reducer = combineReducers({ app: appSlice });

const store = configureStore({ reducer });

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export default store;
