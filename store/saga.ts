import axios, { AxiosRequestConfig } from "axios";
import { call, put, takeLatest, select } from "redux-saga/effects";
import { createInferTypeNode } from "typescript";
import { countryIdSelector } from "./selectors/selector";
import { testActions } from "./slices/slice";

const options: AxiosRequestConfig = {
  method: "GET",
  url: "",
  params: {},
  headers: {
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    "x-rapidapi-key": "079576c957msh05a475683c15090p1f4ec2jsnae7fbb84f1a1",
  },
};

const url: string[] = [
  "https://covid-19-data.p.rapidapi.com/country",
  "https://covid-19-data.p.rapidapi.com/country/code",
];

const paramsChoice = (country: string) => {
  if (country.length <= 3) {
    (options.url = url[1]), (options.params = { code: country });
  } else {
    (options.url = url[0]), (options.params = { name: country });
  }
};

const collectDataFromApi = async (country: string) => {
  paramsChoice(country);
  console.log(options);
  const { data: data } = await axios.request(options);
  return { data };
};

function* handleApiCall() {
  const cityId: string = yield select(countryIdSelector);
  try {
    const { data } = yield call(collectDataFromApi, cityId);
    yield put(testActions.AddCovidData({ covidData: data }));
  } catch (err) {
    console.log(err);
  }
}
export function* rootSaga() {
  yield takeLatest(testActions.fetch.type, handleApiCall);
}

export default rootSaga;
