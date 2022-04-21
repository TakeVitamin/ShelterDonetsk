import React from 'react';
import s from './InfoPopUP.module.css'
import Close from '../images/close.svg';
import {useDispatch} from "react-redux";
import {close} from "../store/closeSlice";

const InfoPopUp = () => {
    const dispatch = useDispatch()
    return (
        <div className={s.style}>
            <div className={s.text}>
                <p>Интерактивная карта бомбоубежищ Донецка</p>
                <p>Вся информация взята из открытых источников</p>
                <p><a href={"https://docs.google.com/viewerng/viewer?url=https://vsednr.ru/wp-content/uploads/2022/02/ZS-GO-1.docx&hl=en"}>Ссылка на оригинальный список</a></p>
            </div>
            <div onClick={()=>dispatch(close())}>
            <img src={Close} className={s.close}></img>
            </div>
        </div>

    );
};

export default InfoPopUp;