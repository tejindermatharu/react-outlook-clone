// https://github.com/reduxjs/cra-template-redux-typescript/blob/master/template/src/features/counter/Counter.tsx

import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import mailReducer from "./mailReducer";

export const store = configureStore({
    reducer: {
        counter: mailReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
