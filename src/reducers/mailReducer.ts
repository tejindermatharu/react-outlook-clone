import {MAIL_ACTIONS} from "../actions/actionTypes";
import {IMailItems} from "./../lib/types/mail";

type MailState = {
    mailItems: Array<IMailItems>;
};

const initialState: MailState = {
    mailItems: []
};

export default function mailReducer(state = initialState, action) {
    let newState: MailState;
    switch (action.type) {
        case MAIL_ACTIONS.MAIL_RECEIVED:
            newState = {...state};
            newState.mailItems = action.val;
            return newState;
        default:
            return state;
    }
}
