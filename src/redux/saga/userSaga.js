import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';

import {
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE,
  GET_LOGIN_REQUESTED,
  GET_LOGOUT_REQUESTED,
  GET_LOGOUT_SUCCESS,
} from '../actions/types';


function getApi(data) {
	console.log(555, data)
    const body = {
      "user": {
        "email": data.email,
        "password":  data.password
      }
    }
    return axios.request({
	    method: 'post',
	    url: 'https://react-rails-api-demo.herokuapp.com/api/v1/signin',
	    data: body
  	});
}

function* fetchUser(action) {
   try {
      const response = yield call(getApi, action.payload);
      localStorage.setItem('user-info', JSON.stringify(response.data));
      yield put({type: GET_LOGIN_SUCCESS, user: response.data});
   } catch (e) {
      yield put({type: GET_LOGIN_FAILURE, message: e.message});
   }
}

function* logoutUser(action) {
   try {
      yield put({type: GET_LOGOUT_SUCCESS});
   } catch (e) {
      yield put({type: GET_LOGIN_FAILURE, error: e.message});
   }
}

function* userSaga() {
   yield takeEvery(GET_LOGIN_REQUESTED, fetchUser);
   yield takeEvery(GET_LOGOUT_REQUESTED, logoutUser);
}

export default userSaga;