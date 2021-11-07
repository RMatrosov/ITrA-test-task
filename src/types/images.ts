import {DELETE_CARD, SET_CURRENT_IMAGES, SET_IMAGES, SET_LOADED, SET_OPEN} from "../redux/constants/constants";

export interface imagesType {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export interface InitialStateType {
    images: imagesType[]
    isLoaded: boolean
    popupOpen: boolean
    currentImages: imagesType | null
}

export interface setImagesActionType {
    type: typeof SET_IMAGES,
    payload: imagesType[]
}

export interface setLoadedActionType {
    type: typeof SET_LOADED,
    payload: boolean
}

export interface deleteCardActionType {
    type: typeof DELETE_CARD,
    payload: number
}

export interface setPopupOpenActionType {
    type: typeof SET_OPEN,
    payload: boolean
}

export interface setCurrentImagesActionType {
    type: typeof SET_CURRENT_IMAGES,
    payload: imagesType
}

export type ActionType = setImagesActionType | setLoadedActionType |
    deleteCardActionType | setPopupOpenActionType | setCurrentImagesActionType


