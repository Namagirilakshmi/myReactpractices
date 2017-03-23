export function addScore(payload){
    return {type:"ADD_SCORE",payload};
}
export function sortScore(payload){
    return {type:"SORT_SCORE",payload};
}
export function deleteScore(payload){
    return {type:"DELETE_SCORE",payload};
}
export function register(payload){
    return {type:"REGISTER",payload};
}
export function login(payload){
    return {type:"LOGIN",payload};
}
export function logout(){
    return {type:"LOGOUT"};
}