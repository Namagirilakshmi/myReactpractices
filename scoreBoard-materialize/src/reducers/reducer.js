let initialState = {
    scores: [],
    credentials: [
        {
            uname: "Aadharsha",
            pwd: "123456"
        }
    ],
    isUserValid: undefined,
    currentUser: undefined,
    userExist: false
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
        case "REGISTER": {
            let match = state.credentials.filter((item) => {
                return (item.uname != action.payload.uname);
            })
            if (match.length == 0) {
                return Object.assign({}, state, { userExist: true });
            }
            return Object.assign({}, state, { credentials: [...state.credentials, action.payload], userExist: false });
        }
        case "LOGIN": {
            let isUserValid = false;
            let checkUser = [...state.credentials];
            checkUser = checkUser.filter(user => user.uname == action.payload.uname && user.pwd == action.payload.pwd);
            if (checkUser.length == 1) {
                isUserValid = true
                window.sessionStorage.setItem("userLogged", action.payload.uname);
            } else {
                isUserValid = false;
            }
            return Object.assign({}, state, { isUserValid })
        }
        case "LOGOUT": {
            window.sessionStorage.removeItem("userLogged");
            return Object.assign({}, state)
        }
        default:
            return state;
    }
}