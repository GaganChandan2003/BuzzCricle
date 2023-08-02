import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as authReducer} from "./auth/reducer";
export type AppDispatch =typeof store.dispatch;
export const store = legacy_createStore(combineReducers({authReducer}),applyMiddleware(thunk));