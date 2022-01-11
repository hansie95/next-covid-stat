import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TestState = {
  covidData: any;
  countryData: any;
  countryName: string;
  region: string;
  view: any;
};

export const initialState: TestState = {
  covidData: [],
  countryData: [],
  countryName: "",
  region: "",
  view: {},
};

const covidStatSlice = createSlice({
  name: "covidStat",
  initialState,
  reducers: {
    RegionOptimizer(state, { payload }: PayloadAction<any>) {
      if (payload.continent === "South-America") {
        state.view = { rotate: [58, 20, 0], scale: 400 };
        state.region = "Americas";
      } else if (payload.continent === "Oceania") {
        state.view = { rotate: [215, 25, 10], scale: 700 };
        state.region = "Oceania";
      } else if (payload.continent === "North-America") {
        state.view = { rotate: [100, -50, 10], scale: 400 };
        state.region = "Americas";
      } else if (payload.continent === "Africa") {
        state.view = { rotate: [-20, 0, 0], scale: 400 };
        state.region = "Africa";
      } else if (payload.continent === "Asia") {
        state.view = { rotate: [-90, -30, 0], scale: 450 };
        state.region = "Asia";
      } else if (payload.continent === "Europe") {
        state.view = { rotate: [-10, -52, 0], scale: 1000 };
        state.region = "Europe";
      }
    },

    AddCovidData(state, { payload }: PayloadAction<any>) {
      state.covidData = payload.covidData;
    },
    AddCountryData(state, { payload }: PayloadAction<any>) {
      state.countryData = payload.countryData;
    },
    AddCountryName(state, { payload }: PayloadAction<string>) {
      state.countryName = payload;
    },
    ClearCountryName(state) {
      state.countryName = "";
    },
    fetch(state) {
      return state;
    },
  },
});

export const covidStatActions = covidStatSlice.actions;

export default covidStatSlice.reducer;
