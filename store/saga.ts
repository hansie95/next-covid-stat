import axios, { AxiosRequestConfig } from "axios";
import { call, put, takeLatest, select } from "redux-saga/effects";
import { countryIdSelector } from "./selectors/selector";
import { testActions } from "./slices/slice";

var options: AxiosRequestConfig = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/countries",
  params: { search: "" },
  headers: {
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": "079576c957msh05a475683c15090p1f4ec2jsnae7fbb84f1a1",
  },
};

const collectDataFromApi = async (country: string) => {
  options.params.search = country;
  const { data: data } = await axios.request(options);
  return { data };
};

function* handleApiCall() {
  try {
    const cityId: string = yield select(countryIdSelector);
    const { data } = yield call(collectDataFromApi, cityId);
    yield put(testActions.AddCovidData({ covidData: data }));
  } catch (err) {
    console.log(err);
  }
}
export function* rootSaga() {
  yield takeLatest(testActions.fetch.type, handleApiCall);
  console.log(options);
}

export default rootSaga;
