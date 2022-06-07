import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';

const apiUrl = `https://api.instantwebtools.net/v1/airlines`;

function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',

      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

function* fetchAirlines(action) {
   try {
      yield put({type: 'GET_AIRLINES_STARTED'});
      const airlines = yield call(getApi);
      yield put({type: 'GET_AIRLINES_SUCCESS', airlines: airlines});
   } catch (e) {
      yield put({type: 'GET_AIRLINES_FAILURE', error: e.message});
   }
}

function* airlineSaga() {
   yield takeEvery('GET_AIRLINES_REQUESTED', fetchAirlines);
}

export default airlineSaga;