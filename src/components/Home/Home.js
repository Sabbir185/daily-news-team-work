import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {loadData} from '../../redux/Actions/Actions'
import MainBody from '../MainBody/MainBody';
import HeaderNav from '../shared/HeaderNav/HeaderNav';



const Home = () => {
    const data = useSelector((state) => state.dataReducer.data.articles)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadData());
    }, [])

    // console.log(data)
    return (
        <div>
            <HeaderNav />
            <MainBody />

        </div>
    );
};

export default Home;