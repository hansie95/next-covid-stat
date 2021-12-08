import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TestState = {
    num: number;
    name: string;
}

export const initialState: TestState = {
    num: 0,
    name: ''}

const test = createSlice({
    name: 'test',
    initialState,
    reducers:{
        incrementNumber(state){
            state.num = state.num++
        },
        decrementNumber(state){
            state.num = state.num--
        },
        changeName(state, {payload}: PayloadAction<string>){
            state.name = payload;
        }
    }
})

export const testActions = test.actions;

export default test.reducer;

