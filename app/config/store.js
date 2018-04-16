import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import rootSaga from './sagas';

const SagaMiddleware = createSagaMiddleware();
const middleware = [SagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleware));

SagaMiddleware.run(rootSaga);

export default store;
