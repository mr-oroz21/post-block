import {DECREMENT, INCREMENT, INPUT_TEXT, COMMENT} from "./types";

export const incrementLikes = () => {
    return {
        type: INCREMENT
    }
}

export const decrementLikes = () => {
    return {
        type: DECREMENT
    }
}

export const inputText = (text) => {
    return {
        type: INPUT_TEXT,
        text
    }
}
export const commentCreate = (text, id) => {
    return {
        type: COMMENT,
        data: {text, id}
    }
}