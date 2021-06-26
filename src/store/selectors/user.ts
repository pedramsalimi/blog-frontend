import { RootState } from "../index";

export const getIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
