import { ActionTypes } from "../constants/action-type";

const initialState = {
    slider: [],
}

export const sliderReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_SLIDES:
            return { ...state, slider: payload }
        default:
            return state
    }
}