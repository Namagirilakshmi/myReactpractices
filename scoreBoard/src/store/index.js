import { createStore, applyMiddleware } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
import createLogger from 'redux-logger';

import rootReducer from '../reducers/';


const logger = createLogger();


const store = createStore(rootReducer);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;