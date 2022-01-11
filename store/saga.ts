import axios, { AxiosRequestConfig } from "axios";
import { call, put, takeLatest, select } from "redux-saga/effects";
import { countryNameSelector } from "./selectors/selector";
import { covidStatActions } from "./slices/slice";

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
  url: "https://forward-reverse-geocoding.p.rapidapi.com/v1/search",
  params: { q: "", "accept-language": "en", polygon_threshold: "0.0" },
  headers: {
    "x-rapidapi-host": "forward-reverse-geocoding.p.rapidapi.com",
    "x-rapidapi-key": "079576c957msh05a475683c15090p1f4ec2jsnae7fbb84f1a1",
  },
};

const collectDataFromApi = async (country: string) => {
  options.params.country = country;
  optionsCountryPosition.params.q = country;
  const { data: covidApiData } = await axios.request(options);
  const { data: countryApidata } = await axios.request(optionsCountryPosition);
  return { covidApiData, countryApidata };
};

function* handleApiCall() {
  try {
    const countryName: string = yield select(countryNameSelector);
    const { covidApiData, countryApidata } = yield call(
      collectDataFromApi,
      countryName
    );

    yield put(
      covidStatActions.AddCovidData({
        covidData: covidApiData,
      })
    );
    yield put(
      covidStatActions.AddCountryData({
        countryData: countryApidata,
      })
    );
    yield put(
      covidStatActions.RegionOptimizer({
        continent: covidApiData.response[0]?.continent,
      })
    );
  } catch (err) {
    console.log(err);
  }
}
export function* rootSaga() {
  yield takeLatest(covidStatActions.fetch.type, handleApiCall);
}

export default rootSaga;
