import {ASYNC_STATUS, INITIAL, MAIL_ACTIONS, SUCCESS} from "../actions/actionTypes";
import {IMailItem} from "./../lib/types/mail";
import {PENDING, ERROR} from "./../actions/actionTypes";
import {MailActions} from "src/actions/mailActions";

interface IMailState {
    mailItems: IMailItem[];
    mailStatus: ASYNC_STATUS;
    selectedMail: IMailItem;
}

const initialState: IMailState = {
    mailItems: null,
    selectedMail: null,
    mailStatus: INITIAL
};

function processMailAction(state: IMailState, action: MailActions) {
    let newState: IMailState;

    switch (action.asyncPayload.status) {
        case SUCCESS:
            newState = {...state};
            newState.mailItems = action.asyncPayload.payload;
            newState.mailStatus = action.asyncPayload.status;
            break;
        case PENDING:
        case ERROR:
            newState = {...state};
            newState.mailStatus = action.asyncPayload.status;
            break;
        default:
            break;
    }
    return newState;
}

export default function mailReducer(state = initialState, action) {
    let newState: IMailState;
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
