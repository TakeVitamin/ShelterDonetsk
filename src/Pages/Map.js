import React, {useState} from 'react';
import {GeolocationControl, Map, Placemark, SearchControl, YMaps} from "react-yandex-maps";
import s from './Map.module.css'
import data from '../store/data.json'
import '../images/peace.svg'
import {v4 as uuidv4} from 'uuid';
import {YMAPS_QUERY} from "../store/q";

const MapY = () => {
    return (
        <div>
            <div className="App">
                <YMaps query={YMAPS_QUERY}>
                    <div className={s.zindex}>
                        <Map className={s.map}
                             defaultState={{center: [47.99899, 37.802837], zoom: 11,}}
                             options={{}}
                             modules={["geolocation", "geocode"]}
                        >
                            {data.map((s) => <Placemark key={uuidv4()}
                                                        modules={['geoObject.addon.balloon']}
                                                        geometry={s.coord}
                                                        properties={{
                                                            balloonContentHeader: `Адрес: ${s.adress} `,
                                                            balloonContentBody: `<div><b>Ответственное лицо: </b> ${s.name}</div>
                                                                                 <div><b>Доступность:</b>  ${s.keys} </div>`,
                                                            balloonContentFooter: `<b>Вместимость</b>: ${s.seats} человек`,
                                                        }}
                                                        options={{
                                                            iconLayout: "default#image",
                                                            iconImageSize: [40, 40],
                                                            iconImageHref: 'https://www.svgrepo.com/show/408584/peace-talk-peace-no-war-negotiate.svg',
                                                        }}
                            />)}
                            <SearchControl options={{
                                placeholderContent: "Найти убежище рядом с вами",
                                position:{
                                    top: "4vh",
                                    right:"10%",
                                },
                            }}/>

                        </Map>
                    </div>
                </YMaps>
            </div>

        </div>);
};

export default MapY;