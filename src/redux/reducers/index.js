import { combineReducers } from "redux";
import { sliderReducer } from "./sliderReducer";

const reducers = combineReducers({
    allSlides: sliderReducer,
});

export default reducers;