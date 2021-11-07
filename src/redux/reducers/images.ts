import {ActionType, InitialStateType} from "../../types/images";
import {DELETE_CARD, SET_CURRENT_IMAGES, SET_IMAGES, SET_LOADED, SET_OPEN} from "../constants/constants";
import {deleteCardHandler} from "../handlers/handlers";


const initialState: InitialStateType = {
    images: [],
    isLoaded: false,
    popupOpen: false,
    currentImages: null
};

const images = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_IMAGES:
            return {
                ...state,
                images: action.payload,
                isLoaded: true,
            };

        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload,
            };
        case SET_OPEN:
            return {
                ...state,
                popupOpen: action.payload,
            };
        case SET_CURRENT_IMAGES:
            return {
                ...state,
                currentImages: action.payload,
            };
        case DELETE_CARD:
            return deleteCardHandler(state, action.payload)

        default:
            return state;
    }
};

export default images;
