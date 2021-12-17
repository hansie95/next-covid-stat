import axios, { AxiosRequestConfig } from "axios";
import { call, put, takeLatest, select } from "redux-saga/effects";
import { countryIdSelector } from "./selectors/selector";
import { testActions } from "./slices/slice";

const options: AxiosRequestConfig = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/statistics",
  params: { country: "" },
  headers: {
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": "079576c957msh05a475683c15090p1f4ec2jsnae7fbb84f1a1",
  },
};

const optionsCountryPosition: AxiosRequestConfig = {
  method: "GET",
  url: "https://covid-19-data.p.rapidapi.com/country",
  params: { name: "" },
  headers: {
    "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
    "x-rapidapi-key": "079576c957msh05a475683c15090p1f4ec2jsnae7fbb84f1a1",
  },
};

const collectDataFromApi = async (country: string) => {
  options.params.country = country;
  optionsCountryPosition.params.name = country;
  const { data: data } = await axios.request(options);
  const { data: data2 } = await axios.request(optionsCountryPosition);
  return { data, data2 };
};

function* handleApiCall() {
  try {
    const cityId: string = yield select(countryIdSelector);
    const { data, data2 } = yield call(collectDataFromApi, cityId);

    yield put(testActions.AddCovidData({ covidData: data }));
    yield put(
      testActions.AddCovidData2({
        covidData2: data2,
      })
    );
  } catch (err) {
    console.log(err);
  }
}
export function* rootSaga() {
  yield takeLatest(testActions.fetch.type, handleApiCall);
}

export default rootSaga;
