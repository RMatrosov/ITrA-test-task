import React, {FC} from 'react';
import {Button, FormControl} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import {ISortItemsType} from "../types/ISortUtem";
import {sortItems} from "../utils/sortItems";
import {AppStateType} from "../redux/store";
import {useSelector} from "react-redux";

export const useStyles = makeStyles({
    root: {
        margin: '40px 0 40px 0',
        width: '100%'
    },
    btnGroup: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: 'space-between'
    },
    btn: {
        backgroundColor: '#f9f9f9',
        transition: 'background-color 0.1s ease-in-out',
        margin: '0 auto',
        height: 20,
        fontSize: 'x-small',
        fontWeight: 'bold',
        '&:hover': {
            border: '1px solid black',
        }
    },

    activeBtn: {
        backgroundColor: '#282828',
        color: '#fff',
        fontWeight: 'bold',
        transition: 'background-color 0.1s ease-in-out',
        margin: '0 auto',
        height: 20,
        width: 20,
        fontSize: 'x-small',
        '&:hover': {
            backgroundColor: '#282828',
        }
    },
});

type SortPopupTypesProps = {
    onSortBy(item: ISortItemsType): void
}

const Sort:FC<SortPopupTypesProps> = ({onSortBy}) => {

    const classes = useStyles();

    const {name} = useSelector((state: AppStateType) => state.sort.sortBy);

    return (
        <FormControl component="fieldset" className={classes.root}>
            <div className={classes.btnGroup}>
                {sortItems.map((item, index) => <Button
                    key={`${item.name}_${index}`}
                    onClick={() => onSortBy(item)}
                    className={name === item.name ?
                        classes.activeBtn : classes.btn}
                >{item.name}</Button>)}
            </div>
        </FormControl>
    );
};

export default Sort;
