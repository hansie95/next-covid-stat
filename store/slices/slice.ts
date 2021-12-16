import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TestState = {
    data: any;
    countryId: string;
}

export const initialState: TestState = {
    data: [],
    countryId:''
}

const test = createSlice({
    name: 'test',
    initialState,
    reducers:{
        AddCovidData(state, {payload}: PayloadAction<any>){
            state.data = payload.covidData;
        },
        AddCountryId(state, {payload}: PayloadAction<string>){
            state.countryId = payload;
        },
        fetch(state){
            return state;
        }
    }
})

export const testActions = test.actions;

export default test.reducer;

