import {combineReducers} from "redux";
import {routerReducer as routing} from "react-router-redux";
import dinosaurReducer from "./Dinosaur/Reducer";

export default combineReducers({
  routing,
  dinosaurReducer
});
