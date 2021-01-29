import {AysncPayload, MAIL_ACTIONS} from "../actions/actionTypes";
import {IMailItem} from "./../lib/types/mail";

type MailState = {
    mailItems: AysncPayload<IMailItem>;
    selectedMail: IMailItem;
};

const initialState: MailState = {
    mailItems: null,
    selectedMail: null
};

export default function mailReducer(state = initialState, action) {
    let newState: MailState;
    switch (action.type) {
        case MAIL_ACTIONS.MAIL_RECEIVED:
            newState = {...state};
            newState.mailItems = action.asyncPayload;
            return newState;

        case MAIL_ACTIONS.SELECTED_MAIL:
            newState = {...state};
            newState.selectedMail = action.payload;
            return newState;
        default:
            return state;
    }
}
