import React, {useEffect} from 'react';
import './App.css';
import Main from "./components/Main";
import {useDispatch, useSelector} from "react-redux";
import {getImages} from "./redux/actions/images";
import {Container} from "@mui/material";
import {AppStateType} from "./redux/store";
import Paginate from "./components/Paginate";
import Popup from "./components/Popup";
import Sort from "./components/Sort";
import {ISortItemsType} from "./types/ISortUtem";
import {setSortBy} from "./redux/actions/sort";

function App() {

    const dispatch = useDispatch();
    const {currentPage} = useSelector((state: AppStateType) => state.paginate);

    const {name, order} = useSelector((state: AppStateType) => state.sort.sortBy);

    function onSortBy(item: ISortItemsType) {
        const order = item.order;
        const name = item.name;
        dispatch(setSortBy(name, order))
    }

    useEffect(() => {
        dispatch(getImages(currentPage, name, order))
    }, [dispatch, currentPage, name, order]);

    return (
        <div className="App">
            <Container maxWidth='md'>
                <Sort onSortBy={onSortBy}/>
                <Popup/>
                <Main/>
                <Paginate/>
            </Container>
        </div>
    );
}

export default App;
