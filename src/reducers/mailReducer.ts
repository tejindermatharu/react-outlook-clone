import {MAIL_ACTIONS} from "../actions/actionTypes";

const initialState = {
    counter: 0,
    mail: null
};

export default function mailReducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        //add your cases according to action types
        case MAIL_ACTIONS.SAMPLE_ACTION_TYPE:
            newState = {...state};
            newState.counter = newState.counter + action.val;
            return newState;
        case MAIL_ACTIONS.MAIL_RECEIVED:
            newState = {...state};
            newState.mail = action.val;
            return newState;
        default:
            return state;
    }
}
