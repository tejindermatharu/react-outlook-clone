import {combineReducers} from "redux";
import mailReducer from "./mailReducer";
import commonReducer from "./commonReducer";

const rootReducer = combineReducers({
    mail: mailReducer,
    common: commonReducer
});

//Type is inferred from rootReducer
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
