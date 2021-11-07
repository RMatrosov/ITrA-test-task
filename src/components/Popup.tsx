import React from 'react';
import {Box, CardMedia, Modal} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {setPopupOpen} from "../redux/actions/images";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Popup = () => {
    const dispatch = useDispatch();
    const {popupOpen, currentImages} = useSelector((state: AppStateType) => state.images);
    function handleClose() {
        dispatch(setPopupOpen(false))
    }

    return (
        <div>
            <Modal
                open={popupOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CardMedia
                        component="img"
                        height="600"
                        image={currentImages?.url}
                        alt={currentImages?.title}
                    />
                </Box>
            </Modal>
        </div>
    );
};

export default Popup;
