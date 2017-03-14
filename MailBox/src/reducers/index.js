import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {sendMailReducer} from './reducer';

const rootReducer = combineReducers({
        sendMailReducer,
        routing: routerReducer
    });

export default rootReducer;