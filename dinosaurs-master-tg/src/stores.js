import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import rootReducer from "./combined.reducers";

let middlewares = [
  thunk,
  require("redux-logger")(),
  require("redux-immutable-state-invariant")()
];

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares));

  if (module.hot) {
    module.hot.accept("./combined.reducers", () => {
      const nextReducer = require("./combined.reducers").default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
