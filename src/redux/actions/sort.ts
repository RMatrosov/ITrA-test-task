import {SET_SORT_BY} from "../constants/constants";
import {setSortByActionType} from "../../types/sort";


export const setSortBy = (name: string, order: string | null): setSortByActionType => ({
    type: SET_SORT_BY,
    payload: {name, order},
});
