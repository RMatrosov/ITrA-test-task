import React, {FC} from 'react';
import {Pagination, Stack} from "@mui/material";
import {AppStateType} from "../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../redux/actions/paginate";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    btnGroup: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        paddingBottom: 40
    }
});


const Paginate: FC = () => {

    const dispatch = useDispatch();
    const classes = useStyles();

    const {totalItemCount, currentPage, defaultItemsCount} =
        useSelector((state: AppStateType) => state.paginate);

    const pagesCount = Math.ceil(totalItemCount / defaultItemsCount);

    const onSetPage = (event: any, value: number) => {
        dispatch(setCurrentPage(value))
    }

    return (
        <div className={classes.btnGroup}>
            <Stack spacing={2}>
                <Pagination
                    page={currentPage}
                    count={pagesCount}
                    onChange={onSetPage}
                    variant="outlined" shape="rounded"/>
            </Stack>
        </div>
    );
};

export default Paginate;
