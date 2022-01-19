import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";

import covidStatReducer from "./slices/slice";
import languageReducer from "./slices/languageSlice";
import { rootSaga } from "./saga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    covidStat: covidStatReducer,
    languageSelect: languageReducer,
  },
  middleware: [saga],
});

saga.run(rootSaga);

export default store;
