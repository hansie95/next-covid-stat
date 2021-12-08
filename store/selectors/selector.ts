import { createSelector } from "reselect";

export const testSelector = (state: any) =>{
    return state.test;
}

export const testNameSelector = createSelector(
    testSelector,
    (state) => state.name
    )
