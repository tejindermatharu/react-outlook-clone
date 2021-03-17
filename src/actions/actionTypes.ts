import {RootState} from "src/reducers";

export const MAIL_ACTIONS = {
    SAMPLE_ACTION_TYPE: "SAMPLE_ACTION_TYPE",
    MAIL_RECEIVED: "MAIL_RECEIVED",
    SELECTED_MAIL: "SELECTED_MAIL",
    MAIL_SENT: "MAIL_SENT"
};

export const GLOBAL_ACTIONS = {
    SELECTED_FOLDER: "SELECTED_FOLDER"
};

export const PENDING = "PENDING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const INITIAL = "INITIAL";

export function address(url: string): string {
    return `https://localhost:44371/${url}`;
}

export type ASYNC_STATUS = typeof PENDING | typeof SUCCESS | typeof ERROR | typeof INITIAL;

export interface IGetState {
    (): RootState;
}

export interface IRequestPending {
    readonly status: typeof PENDING;
}

export interface IRequestSuccess<T> {
    readonly status: typeof SUCCESS;
    payload: T;
}

export interface IRequestError {
    readonly status: typeof ERROR;
    message?: string;
    code: number;
    errors?: any[];
}

export type AysncPayload<T> = IRequestSuccess<T> | IRequestError | IRequestPending;

export function makeRequestPending<T>(): AysncPayload<T> {
    return {
        status: PENDING
    };
}

export function makeRequestSuccess<T>(payload: T): AysncPayload<T> {
    return {
        status: SUCCESS,
        payload
    };
}

export function makeRequestError<T>(
    errorCode: number,
    mesg?: string,
    err?: any[]
): AysncPayload<T> {
    return {
        status: ERROR,
        message: mesg,
        code: errorCode,
        errors: err
    };
}
