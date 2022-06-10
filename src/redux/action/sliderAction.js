import { ActionTypes } from '../constants/action-type';

export const setSlides = (slides) => {
    return {
        type: ActionTypes.SET_SLIDES,
        payload: slides,
    }
}

