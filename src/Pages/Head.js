import React from 'react';
import s from './Head.module.css'
import Logo from '../images/info.svg';
import {useDispatch, useSelector} from "react-redux";
import {close} from "../store/closeSlice";
import {store} from "../store/store";
const Head = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    console.log(store)
    return (
       <img src={Logo} className={s.head} onClick={()=>dispatch(close())}></img>
    );
};

export default Head;