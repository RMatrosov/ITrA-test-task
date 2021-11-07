import {SET_SORT_BY} from "../redux/constants/constants";

export type InitialStateType = {
    sortBy: {
        order: string | null,
        name: string
    },
}

type payloadType = {
    order: string | null
    name: string
}

export type setSortByActionType = {
    type: typeof SET_SORT_BY,
    payload: payloadType
}
