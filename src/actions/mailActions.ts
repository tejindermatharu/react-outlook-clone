import axios from "axios";
import {
    MAIL_ACTIONS,
    GLOBAL_ACTIONS,
    makeRequestSuccess,
    makeRequestPending,
    AysncPayload
} from "./actionTypes";
import {IMailItem, MailType} from "src/lib/types/mail";
import {Action} from "redux";

export interface IMailReceived extends Action {
    readonly type: typeof MAIL_ACTIONS.MAIL_RECEIVED;
    asyncPayload: AysncPayload<IMailItem[]>;
}

export function sampleActionCreator(updateVal: number) {
    return function (dispatch) {
        // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
        return dispatch({
            type: MAIL_ACTIONS.SAMPLE_ACTION_TYPE,
            val: updateVal
        });
    };
}

export function mailActionCreator(mailType: MailType) {
    return async (dispatch) => {
        dispatch({
            type: MAIL_ACTIONS.MAIL_RECEIVED,
            asyncPayload: makeRequestPending()
        } as Action);
        try {
            const mail = await axios.get("http://localhost:4000/mail");
            const data =
                mail?.data.length > 0 ? mail?.data.filter((m) => m.mailType === mailType) : [];

            dispatch({
                type: MAIL_ACTIONS.MAIL_RECEIVED,
                asyncPayload: makeRequestSuccess(data as IMailItem)
            } as Action);
        } catch (error) {
            console.log(error);
        }
    };
}

export function mailFolderChange(mailType: MailType) {
    return (dispatch) => {
        dispatch({
            type: GLOBAL_ACTIONS.SELECTED_FOLDER,
            val: mailType
        });
        try {
            dispatch(mailActionCreator(mailType));
        } catch (error) {
            console.log(error);
        }
    };
}

export type MailActions = IMailReceived;

//https://codesandbox.io/s/react-using-json-server-3uupl?file=/src/App.js
//https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d
