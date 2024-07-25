import { createSlice } from "@reduxjs/toolkit";

import initialState from "store/slices/appSlice/initialState";
import reducers from "store/slices/appSlice/reducers";

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers,
});

export const { updateUsersIds } = appSlice.actions;

export default appSlice.reducer;
