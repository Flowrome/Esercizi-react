import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './redux/reducer';

import rootSaga from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const fullNameSaga = createSagaMiddleware();
// console.log(rootSaga);

export default createStore(
    reducer,
    composeEnhancers(applyMiddleware(fullNameSaga))
);

fullNameSaga.run(rootSaga)