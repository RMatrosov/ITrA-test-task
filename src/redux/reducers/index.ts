import { combineReducers } from 'redux';
import images from "./images";
import paginate from "./paginate";
import sort from "./sort";


export type RootReducerType = typeof rootReducer

const rootReducer = combineReducers({
    images,
    paginate,
    sort
});

export default rootReducer;
