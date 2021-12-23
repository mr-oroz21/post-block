import {combineReducers} from "redux";
import {LikeReducer} from "./LikeReducer";
import {inputReducer} from "./inputReducer";
import {commentsReducer} from "./commentsReducer";


export const rootReducer = combineReducers({
    LikeReducer,
    inputReducer,
    commentsReducer
})