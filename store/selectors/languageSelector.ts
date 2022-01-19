import { createSelector } from "reselect";

export const mainSelector = (state: any) => {
  return state.languageSelect;
};

export const languageSelector = createSelector(
  mainSelector,
  (state) => state.language
);
