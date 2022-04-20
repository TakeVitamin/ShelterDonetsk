import React from 'react';
import s from "../App.module.css";
import InfoPopUp from "./InfoPopUP";
import Head from "./Head";
import {useSelector} from "react-redux";

const BuPop = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
            {count ? <div className={s.popup}><InfoPopUp/></div> : null}
            <div className={s.info}><Head/></div>
        </div>
    );
};

export default BuPop;