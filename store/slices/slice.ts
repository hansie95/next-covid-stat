import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TestState = {
  data: any;
  data2: any;
  countryId: string;
  longlat: [number, number];
};

export const initialState: TestState = {
  data: [],
  data2: [],
  longlat: [0, 0],
  countryId: "",
};

const test = createSlice({
  name: "test",
  initialState,
  reducers: {
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
