import { configureStore } from "@reduxjs/toolkit";

import testReducer from './slices/slice'

const store = configureStore({
    reducer:{
        test: testReducer

    }
})

export default store;