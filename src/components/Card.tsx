import {Card, CardActionArea, CardContent, CardMedia, IconButton, Typography} from '@mui/material';
import React, {FC} from 'react';
import {imagesType} from "../types/images";
import {makeStyles} from "@material-ui/core/styles";
import DeleteIcon from '@mui/icons-material/Delete';

export const useStyles = makeStyles({
    text: {
        height: 100,
    },
    deleteBtn: {
        position: "absolute",
        right: 5,
        top: 5
    },
    card: {
        position: "relative",
        margin: '0 auto',
    }
});

type CartItemTypesProps = {
    card: imagesType
    onCardDelete: (id: number) => void
    setCardToPopup: (id: imagesType) => void
}

const CardItem: FC<CartItemTypesProps> = ({card, onCardDelete, setCardToPopup}) => {

    const classes = useStyles();

    return (
        <Card sx={{width: 150}} className={classes.card}>
            <CardActionArea onClick={() => setCardToPopup(card)}>
                <CardMedia
                    component="img"
                    height="150"
                    image={card.thumbnailUrl}
                    alt={card.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1"
                                className={classes.text}>
                        {card.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <IconButton aria-label="delete"
                        onClick={() => onCardDelete(card.id)}
                        className={classes.deleteBtn}>
                <DeleteIcon/>
            </IconButton>
        </Card>
    );
};

export default CardItem;
