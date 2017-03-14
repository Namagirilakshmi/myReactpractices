import React from "react";
import {Route, IndexRoute, Redirect} from "react-router";

import DinosaurContainer from "./Dinosaur/Container.jsx";
import Content from "./Dinosaur/Content.jsx";
import Dinosaur from "./Dinosaur/Dinosaur.jsx";

export default (
  <Route path="/" component={ DinosaurContainer }>
    <IndexRoute component={ Content } />
    <Route path=":id" component={ Dinosaur } />
    <Redirect from="*" to="/" />
  </Route>
);
