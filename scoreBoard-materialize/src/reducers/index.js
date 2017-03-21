import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {addScoreReducer} from './reducer';

const rootReducer = combineReducers({
        addScoreReducer,
        routing: routerReducer
    });

export default rootReducer;