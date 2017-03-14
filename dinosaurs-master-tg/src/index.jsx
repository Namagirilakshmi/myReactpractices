import React from "react";
import {render} from "react-dom";
import {browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import Root from "./Root.jsx";
import configureStore from "./stores";

require("bootstrap-css");

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById("root");

render(<Root store={ store } history={ history } />, rootElement);

if(module.hot) {
  console.log("module.hot");
  const orgError = console.error;
  console.error = message => {
    if(message &&
        message.indexOf("You cannot change <Router routes>;") === "-1") {
      orgError.apply(console, [message]);
    }
  };

  module.hot.accept("./Root", () => {
    const NextApp = require("./Root").default;
    render(<NextApp store={ store } history={ history } />, rootElement);
  });
}
