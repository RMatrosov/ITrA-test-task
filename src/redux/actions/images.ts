import {
    DELETE_CARD,
    SET_CURRENT_IMAGES,
    SET_IMAGES,
    SET_LOADED,
    SET_OPEN,
    SET_TOTAL_ITEM_COUNT
} from "../constants/constants";
import {Dispatch} from "redux";
import {fetchImages, getLength} from "../../api/api";
import {TAction} from "../../types";
import {imagesType} from "../../types/images";



export const getImages = (currentPage: number, name: string, order: string | null) => async (dispatch: Dispatch<TAction>) => {
    dispatch({
        type: SET_LOADED,
        payload: false,
    });
    try{
    const images = await fetchImages(currentPage, name, order);
    const imagesLength = await getLength(order);

    dispatch({
        type: SET_IMAGES,
        payload: images,
    });
    dispatch({
        type: SET_TOTAL_ITEM_COUNT,
        payload: imagesLength.length,
    });
    }catch (e) {
     console.log(e)
}
}


export const deleteCard = (id: number) => ({
    type: DELETE_CARD,
    payload: id,
});

export const setPopupOpen = (value: boolean) => ({
    type: SET_OPEN,
    payload: value,
});

export const setCurrentImages = (card: imagesType) => ({
    type: SET_CURRENT_IMAGES,
    payload: card,
});


