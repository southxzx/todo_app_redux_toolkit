import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducerToDo from './redux/reducer/reducer';
import rootSaga from './sagas';
import store from './app/store';

// const sagaMiddleware = createSagaMiddleware();
// work with redux-dev-tool
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//combine
// const reducers = combineReducers({
//     reducerToDo
// })

// khai báo dùng chung middleware thunk + saga
// const middlewares = [thunk, sagaMiddleware]

// let store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));

// sagaMiddleware.run(rootSaga);


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);