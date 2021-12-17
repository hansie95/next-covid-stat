import { createSelector } from "reselect";

export const testSelector = (state: any) => {
  return state.test;
};

export const testDataSelector = createSelector(
  testSelector,
  (state) => state.data
);

export const longLatSelector = createSelector(
  testSelector,
  (state) => state.longlat
);

export const countryIdSelector = createSelector(
  testSelector,
  (state) => state.countryId
);

export const testData2Selector = createSelector(
  testSelector,
  (state) => state.data2
);
