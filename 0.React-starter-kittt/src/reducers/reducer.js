let initialState={
    demo:0
}
export function incrementReducer(state=initialState,action){
    console.log(action);
    switch(action.type){
        case "INC_DEMO":{
            return Object.assign({},state,{demo:state.demo+action.data})
        }
        case "LOAD":{
            return Object.assign({},state);
        }
        default:
            return state;
    }
}