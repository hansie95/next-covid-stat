import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type languageState = {
  language: "hun" | "eng";
};

export const initialState: languageState = {
  language: "hun",
};

const languageSelectSlice = createSlice({
  name: "languageSelect",
  initialState,
  reducers: {
    langueageSwitcher(state, { payload }: PayloadAction<any>) {
      if (payload === "hun") {
        state.language = "hun";
      } else {
        state.language = "eng";
      }
    },
  },
});
export const languageSelectActions = languageSelectSlice.actions;

export default languageSelectSlice.reducer;
