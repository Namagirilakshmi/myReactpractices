let inboxMail = [
    {
        from: "Person 1",
        sub: "Req to operate",
        body: `
        Dear Sir/Madam,
            I Kindly request you to process my operating request
        `
    },
    {
        from: "Person 2",
        sub: "Req to leave",
        body: `
        Dear Sir/Madam,
            I Kindly request you to process my leave request
        `
    },
    {
        from: "Person 3",
        sub: "Req to operate",
        body: `
        Dear Sir/Madam,
            I Kindly request you to process my operating request
        `
    }
]
let initialState = {
    sentItems: [],
    inbox: inboxMail
};
export function sendMailReducer(state = initialState, action) {
    switch (action.type) {
        case "NEW_MAIL": {
            return Object.assign({}, state, { sentItems: [...state.sentItems, action.payload] });
        }
        case "RECEIVING_MAIL": {
            if (Object.keys(action.payload).length <= 0) {
                return state;
            }
            return Object.assign({}, state, { inbox: [...state.inbox, action.payload] });
        }
        default:
            return state;
    }
}