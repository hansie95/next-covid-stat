import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TestState = {
  data: any;
  data2: any;
  countryId: string;
  longlat: [number, number];
  region: string;
  view: any;
};

export const initialState: TestState = {
  data: [],
  data2: [],
  longlat: [0, 0],
  countryId: "",
  region: "",
  view: {},
};

const test = createSlice({
  name: "test",
  initialState,
  reducers: {
    RegionOptimizer(state, { payload }: PayloadAction<any>) {
      if (payload.continent === "South-America") {
        state.region = "Americas";
        state.view = { rotate: [58, 20, 0], scale: 400 };
      } else if (payload.continent === "Oceania") {
        state.region = "Oceania";
        state.view = { rotate: [215, 25, 10], scale: 710 };
      } else if (payload.continent === "North-America") {
        state.region = "Americas";
        state.view = { rotate: [100, -50, 10], scale: 400 };
      } else if (payload.continent === "Africa") {
        state.region = "Africa";
        state.view = { rotate: [-20, 0, 0], scale: 400 };
      } else if (payload.continent === "Asia") {
        state.region = "Asia";
        state.view = { rotate: [-90, -30, 0], scale: 450 };
      } else if (payload.continent === "Europe") {
        state.region = "Europe";
        state.view = { rotate: [-10, -52, 0], scale: 1200 };
      }
    },
    AddLongLat(state, { payload }: PayloadAction<any>) {
      state.longlat = payload.longlat;
    },
    AddCovidData(state, { payload }: PayloadAction<any>) {
      state.data = payload.covidData;
    },
    AddCovidData2(state, { payload }: PayloadAction<any>) {
      state.data2 = payload.covidData2;
    },
    AddCountryId(state, { payload }: PayloadAction<string>) {
      state.countryId = payload;
    },
    fetch(state) {
      return state;
    },
  },
});

export const testActions = test.actions;

export default test.reducer;
