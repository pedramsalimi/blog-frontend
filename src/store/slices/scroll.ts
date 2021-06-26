import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ScrollKey = "";

export type ScrollMeta = {
  x: number;
  y: number;
};

export interface IScrollState {
  scorlls: {
    [key in ScrollKey]?: ScrollMeta;
  };
}

const initialState: IScrollState = {
  scorlls: {},
};

const scrollSlice = createSlice({
  name: "scroll",
  initialState,
  reducers: {
    preserveScroll(
      state: IScrollState,
      action: PayloadAction<ScrollMeta & { key: ScrollKey }>
    ) {
      const { key, x, y } = action.payload;
      const scrolls = { ...state.scorlls };
      scrolls[key] = { x, y };
      state.scorlls = scrolls;
    },

    clearScrolls(state: IScrollState) {
      state.scorlls = {};
    },
  },
});

export const { preserveScroll, clearScrolls } = scrollSlice.actions;

export default scrollSlice.reducer;
