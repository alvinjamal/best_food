import { applyMiddleware, createStore } from "redux";
import rootReducers from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const food = createStore(rootReducers, applyMiddleware(thunk, logger));

export default food;
