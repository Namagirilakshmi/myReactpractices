export function addScore(payload){
    return {type:"ADD_SCORE",payload};
}
export function sortScore(payload){
    return {type:"SORT_SCORE",payload};
}
export function searchScore(payload){
    return {type:"SEARCH_SCORE",payload};
}