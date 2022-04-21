import React from 'react';
import s from './Head.module.css'
import Logo from '../images/info.svg';
import {useDispatch} from "react-redux";
import {close} from "../store/closeSlice";
const Head = () => {
    const dispatch = useDispatch()
    return (
       <img src={Logo} className={s.head} onClick={()=>dispatch(close())}></img>
    );
};
export default Head;