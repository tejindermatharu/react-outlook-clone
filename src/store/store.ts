import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

//Need this for redux dev tools to work in browser
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
