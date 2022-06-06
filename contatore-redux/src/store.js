import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import counterReducer from "./redux/reducer";
import counterWatcher from "./sagas/counter";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const counter = createSagaMiddleware();

export default createStore(
    counterReducer,
    composeEnhancers(applyMiddleware(counter))
);

counter.run(counterWatcher)