import {AysncPayload, MAIL_ACTIONS, SUCCESS} from "../actions/actionTypes";
import {IMailItem} from "./../lib/types/mail";
import {PENDING, ERROR} from "./../actions/actionTypes";
import {MailActions} from "src/actions/mailActions";

type MailState = {
    mailItems: IMailItem[];
    mailData: AysncPayload<IMailItem[]>;
    selectedMail: IMailItem;
};

const initialState: MailState = {
    mailItems: null,
    selectedMail: null,
    mailData: null
};

function processMailAction(state: MailState, action: MailActions) {
    let newState: MailState;

    switch (action.asyncPayload.status) {
        case SUCCESS:
            newState = {...state};
            newState.mailItems = action.asyncPayload.payload;
            newState.mailData = action.asyncPayload;
            break;
        case PENDING:
        case ERROR:
            newState = {...state};
            newState.mailData = action.asyncPayload;
            break;
        default:
            break;
    }
    return newState;
}

export default function mailReducer(state = initialState, action) {
    let newState: MailState;
    switch (action.type) {
        case MAIL_ACTIONS.MAIL_RECEIVED:
            return processMailAction(state, action);
        case MAIL_ACTIONS.SELECTED_MAIL:
            newState = {...state};
            newState.selectedMail = action.payload;
            return newState;
        default:
            return state;
    }
}
