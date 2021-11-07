import {InitialStateType} from "../../types/images";


export const deleteCardHandler = (state: InitialStateType, payload: number) => {
    const newData = state.images.filter(image => image.id !== payload);
    return {
        ...state,
        images: newData,
    }
}
