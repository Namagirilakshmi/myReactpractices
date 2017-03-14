// import { applyMiddleware, createStore } from "redux";

// const reducer = (initialState=0, action) => {
//     if(action.type === "INC"){
//         return initialState + 1;        
//     }else if (action.type === "DEC"){
//         return initialState - 1;
//     } else if (action.type === "E") {
//         throw new Error("Error Found");
//     }
//     return initialState;
// }

// const logger = (store) => (next) => (action) => {
//     console.log("action fired", action);
//     next(action);
// }

// const error = (store) => (next) => (action) =>{
//     try {
//         next(action);
//     } catch(e){
//         console.log(e);
//     }
// }

// const middleware = applyMiddleware(logger, error);

// const store = createStore(reducer, 1, middleware)

// store.subscribe( () => {
//     console.log("Store Changed", store.getState())   
// })

// store.dispatch({type: "INC"})
// store.dispatch({type: "DEC"})
// store.dispatch({type: "INC"})
// store.dispatch({type: "DEC"})



// import { applyMiddleware, createStore } from "redux";
// import axios from "axios";
// import logger from "redux-logger";
// import thunk from "redux-thunk";

// const reducer = (state={}, action) => {
//     switch(action.type) {
//         case "FETCH_USERS_START": {

//             break;
//         }
//         case "FETCH_USERS_ERROR": {
//             break;
//         }
//         case "RECEIVE_USERS": {
//             break;
//         }
//     }
//     return state;
// }

// const middleware = applyMiddleware(thunk, logger());
// const store = createStore(reducer, middleware)

// store.dispatch( (dispatch) => {
//     dispatch({type: "FETCH_USERS_START"})
//     axios.get("http://rest.learncode.academy/api/wstern/users")
//         .then((response) => {
//             dispatch({type: "RECEIVE_USERS", payload: response.data})
//         })
//         .catch((err) => {
//             dispatch({type: "FETCH_USERS_ERROR", payload: err})
//         })

// })

