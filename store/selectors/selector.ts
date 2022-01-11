import { createSelector } from "reselect";

export const covidAndCountrySelector = (state: any) => {
  return state.covidStat;
};

export const covidDataSelector = createSelector(
  covidAndCountrySelector,
  (state) => state.covidData
);

export const countryDataSelector = createSelector(
  covidAndCountrySelector,
  (state) => state.countryData
);

export const countryNameSelector = createSelector(
  covidAndCountrySelector,
  (state) => state.countryName
);

export const regionSelector = createSelector(
  covidAndCountrySelector,
  (state) => state.region
);

export const viewtSelector = createSelector(
  covidAndCountrySelector,
  (state) => state.view
);
