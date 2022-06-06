import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './redux/reducer';

import rootSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagas = createSagaMiddleware();

export default createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagas))
);

sagas.run(rootSaga);