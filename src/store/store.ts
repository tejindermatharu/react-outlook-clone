// https://github.com/reduxjs/cra-template-redux-typescript/blob/master/template/src/features/counter/Counter.tsx

// import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
// import countReducer from "./countReducer";

// export const store = configureStore({
//     reducer: {
//         counter: countReducer
//     }
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//     ReturnType,
//     RootState,
//     unknown,
//     Action<string>
// >;

import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers/index";
import thunk, {ThunkAction, ThunkDispatch, ThunkMiddleware} from "redux-thunk";

export default createStore(rootReducer, applyMiddleware(thunk));
