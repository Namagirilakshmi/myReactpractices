export function addScore(payload){
    return {type:"ADD_SCORE",payload};
}
export function sortScore(payload){
    return {type:"SORT_SCORE",payload};
}
export function deleteScore(payload){
    return {type:"DELETE_SCORE",payload};
}
export function editScore(payload){
    return {type:"EDIT_SCORE",payload};
}