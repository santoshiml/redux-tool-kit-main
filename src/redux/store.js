// thunk
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import airlineReducer from '../redux/reducers/airlineReducer';
// import loginReducer from '../redux/reducers/loginReducer';

// const reducer = combineReducers({
//     airlines: airlineReducer,
//     user: loginReducer,
// });
// const store = createStore(
//   reducer, applyMiddleware(thunk)
// )

// export default store;

// saga

// import { createStore, applyMiddleware, combineReducers, compose } from "redux";
// import createSagaMiddleware from "redux-saga";

// import airlineReducer from '../redux/reducers/airlineReducer';
// import loginReducer from '../redux/reducers/loginReducer';
// import rootSaga from "./saga";

// const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//     airlines: airlineReducer,
//     user: loginReducer,
// });

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(sagaMiddleware))
// );
// sagaMiddleware.run(rootSaga);

// export default store;


// redux toolkit

import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice';
import airlineReducer from './slices/airlineSlice';

const reducer = {
  user: userReducer,
  airlines: airlineReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})


export default store;