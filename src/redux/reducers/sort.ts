import {SET_SORT_BY} from "../constants/constants";
import {InitialStateType, setSortByActionType} from "../../types/sort";

const initialState: InitialStateType = {
    sortBy: {
        order: null,
        name: 'all'
    },
};

const sort = (state = initialState, action: setSortByActionType): InitialStateType => {
    if (action.type === SET_SORT_BY) {
        return {
            ...state,
            sortBy: action.payload,
        };
    }
    return state;
};

export default sort;
