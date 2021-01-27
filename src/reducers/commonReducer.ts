import {MailType} from "src/lib/types/mail";
import {GLOBAL_ACTIONS} from "../actions/actionTypes";

type CommonState = {
    selectedFolder: number;
};

const initialState: CommonState = {
    selectedFolder: MailType.INBOX
};

export default function commonReducer(state = initialState, action) {
    let newState: CommonState;
    switch (action.type) {
        case GLOBAL_ACTIONS.SELECTED_FOLDER:
            newState = {...state};
            newState.selectedFolder = action.val;
            return newState;
        default:
            return state;
    }
}
