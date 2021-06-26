import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie } from "@utils/Cookies";

import { COOKIE_REFRESH_TOKEN_KEY } from "utils/constants";

export interface IUserState {
  isLoggedIn: boolean;
}

const initialState: IUserState = {
  isLoggedIn: !!getCookie().get(COOKIE_REFRESH_TOKEN_KEY),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedIn(state: IUserState, action: PayloadAction<boolean>) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;
