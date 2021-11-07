import React from 'react';
import {Grid, Skeleton} from "@mui/material";
import {AppStateType} from "../redux/store";
import {useDispatch, useSelector} from "react-redux";
import CardItem from "./Card";
import {deleteCard, setCurrentImages, setPopupOpen} from "../redux/actions/images";
import {imagesType} from "../types/images";


const Main = () => {
    const dispatch = useDispatch();
    const {images, isLoaded} = useSelector((state: AppStateType) => state.images);

    function handleCardDelete(id: number) {
        if (window.confirm("Delete?")) {
            dispatch(deleteCard(id))
        }
    }

    function setCardToPopup(card: imagesType) {
        dispatch(setCurrentImages(card))
        dispatch(setPopupOpen(true))
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Grid container
                  direction="row"
                  justifyContent="space-evenly"
                  spacing={4}>
                {isLoaded ? images.map((image) => <Grid item key={image.id} xs={6} sm={3} md={3}>
                    <CardItem card={image}
                              setCardToPopup={setCardToPopup}
                              onCardDelete={handleCardDelete}/>
                </Grid>) : (Array(10)
                    .fill(0)
                    .map((_, index) => <Grid item key={index} xs={6} sm={3} md={3}>
                        <Skeleton key={index} variant="rectangular" width={150}
                                  height={287}/>
                    </Grid>))}
            </Grid>
        </div>
    );
};

export default Main;
