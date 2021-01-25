import axios from "axios";
import {MAIL_ACTIONS} from "./actionTypes";

export function sampleActionCreator(updateVal: number) {
    return function (dispatch) {
        // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
        return dispatch({
            type: MAIL_ACTIONS.SAMPLE_ACTION_TYPE,
            val: updateVal
        });
    };
}

export function mailActionCreator() {
    return async (dispatch) => {
        try {
            const mail = await axios.get("http://localhost:4000/mail");

            dispatch({
                type: MAIL_ACTIONS.MAIL_RECEIVED,
                val: mail.data
            });
        } catch (error) {
            console.log(error);
        }
    };
}
