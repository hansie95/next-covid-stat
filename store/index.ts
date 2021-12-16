import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import testReducer from './slices/slice'
import { rootSaga } from "./saga";

const saga = createSagaMiddleware();

const store = configureStore({
    reducer:{
        test: testReducer
    },
    middleware: [saga]
})

saga.run(rootSaga)

export default store;