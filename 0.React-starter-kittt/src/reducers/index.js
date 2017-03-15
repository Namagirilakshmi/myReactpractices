import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {incrementReducer} from './reducer';

const rootReducer = combineReducers({
        incrementReducer,
        routing: routerReducer
    });

export default rootReducer;