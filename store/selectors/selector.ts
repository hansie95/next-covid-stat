import { createSelector } from "reselect";

export const testSelector = (state: any) =>{
    return state.test;
}

export const testDataSelector = createSelector(
        testSelector,
        (state) => state.data
        )

export const countryIdSelector = createSelector(
        testSelector,(state) => state.countryId
        )