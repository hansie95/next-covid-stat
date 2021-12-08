import axios, { AxiosRequestConfig } from "axios"
import {call, put, takeLatest} from "redux-saga/effects"
import { testActions } from "./slices/slice";

const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://covid-19-data.p.rapidapi.com/country/code',
    params: {code: 'it'},
    headers: {
      'x-rapidapi-host': 'covid-19-data.p.rapidapi.com',
      'x-rapidapi-key': '079576c957msh05a475683c15090p1f4ec2jsnae7fbb84f1a1'
    }
  };


  const collectDataFromApi = async () =>{
  const {data: data} = await axios.request(options)
  return {data}
}

function* handleApiCall(){
    try{
        const {data} = yield call(collectDataFromApi);
        yield put(testActions.AddCovidData({covidData: data}))
    }catch (err){
        console.log(err);  
    }
}
export function* rootSaga(){
    yield takeLatest(testActions.fetch.type, handleApiCall)
}

export default rootSaga

