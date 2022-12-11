import { applyMiddleware } from "redux";
import { CreateStore } from "redux";
import RootReducers from "./Reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = CreateStore(RootReducers, applyMiddleware(thunk, logger));

export default store;
