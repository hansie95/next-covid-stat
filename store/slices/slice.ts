import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TestState = {
    data: any;
}

export const initialState: TestState = {
    data: []}

const test = createSlice({
    name: 'test',
    initialState,
    reducers:{
        AddCovidData(state, {payload}: PayloadAction<any>){
            state.data = payload.covidData;
        },
        fetch(state){
            return state;
        }
    }
})

export const testActions = test.actions;

export default test.reducer;

