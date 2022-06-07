import {
  GET_LOGIN_STARTED,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE,
  GET_LOGOUT_SUCCESS,
} from '../actions/types';


const initState = {
  user: []
}

const LoginReducer = (state=initState,action) => {
  switch (action.type){
    case GET_LOGIN_STARTED:
      return {
        ...state,
        loading: true
      };
    case GET_LOGIN_SUCCESS:
      console.log(777, action)
      return {
         ...state,
        loading: false,
        error: null,
        user: action.user 
      }
    case GET_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };

    case GET_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: null,
        error: null
      };
            

            
    default: 
      return state
  }
}

export default LoginReducer