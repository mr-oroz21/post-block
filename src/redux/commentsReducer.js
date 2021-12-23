import {COMMENT} from "./types";

const initialState = {
    comments: [],
}
export const commentsReducer = (state = initialState, action) => {
    // console.log('comment > ', action)
    // return state
    switch(action.type) {
        case COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.data]
            }
        default:
            return state
    }
}