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
        case "DELETE_SCORE": {
            let newState = Object.assign({}, state);
            let rows = newState.scores.slice();
            rows = rows.filter(score => score.id != action.payload.id);
            return Object.assign({}, state, { scores: rows });
        }
        case "EDIT_SCORE": {
            let newState = Object.assign({}, state);
            let rows = newState.scores.slice();
            return Object.assign({}, state, { scores: rows });
        }
        default:
            return state;
    }
}