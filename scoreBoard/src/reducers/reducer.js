let initialState = {
    scores: [
       
    ]
}
export function addScoreReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_SCORE": {
            return Object.assign({}, state, { scores: [...state.scores, action.payload] });
        }
        case "SORT_SCORE": {
            let newState = Object.assign({}, state);
            let rows = newState.scores.slice();
            rows.sort((a, b) => {
                var sortVal = 0;
                if (a[action.payload.sortField] > b[action.payload.sortField]) {
                    sortVal = 1;
                }
                if (a[action.payload.sortField] < b[action.payload.sortField]) {
                    sortVal = -1;
                }
                if (action.payload.sortType === 'arrow_downward') {
                    sortVal = sortVal * -1;
                }
                return sortVal;
            });
            return Object.assign({}, state, { scores: rows });
        }
        case "SEARCH_SCORE": {
            // console.log(action.payload);
            // if (!action.payload.searchVal) {
            //     return Object.assign({}, state);
            // }
            // var filterBy = action.payload.searchVal.toString().toLowerCase();
            // var size = state.length;
            // var filteredList = [];
            // for (var index = 0; index < size; index++) {
            //     var v = state[index][action.payload.searchBy];
            //     if (v.toString().toLowerCase().indexOf(filterBy) !== -1) {
            //         filteredList.push(state[index]);
            //     }
            // }
            let rows = state.scores.slice();
            var filterBy = action.payload.searchVal.toString().toLowerCase();
            let filteredList = rows.filter((val) => val[action.payload.searchBy].includes(filterBy));   
            console.log(filteredList);
            return Object.assign({}, state,{scores:filteredList});
        }
        default:
            return state;
    }
}