import React from 'react';
import {Map, Placemark, YMaps} from "react-yandex-maps";
import s from './Map.module.css'
import data from '../data.json'
import '../images/peace.svg'

const MapY = () => {
    return (
        <div>
            <div className="App">
                <YMaps>
                    <div className={s.zindex}>
                        <Map className={s.map}
                             defaultState={{center: [48.015885, 37.802837], zoom: 11}}>
                            {data.map((s) => <Placemark modules={['geoObject.addon.balloon']}
                                                        geometry={s.coord}
                                                        properties={{
                                                            balloonContentHeader: `Адрес: ${s.adress} `,
                                                            balloonContentBody: `<div><b>Ответственное лицо: </b> ${s.name}</div>
                                                                             <div><b>Доступность:</b>  ${s.keys} </div>`,

                                                            balloonContentFooter: ` <b>Вместимость</b>: ${s.seats} человек`,
                                                        }}
                                                        options={{
                                                            iconLayout: "default#image",
                                                            iconImageSize: [40,40],
                                                            iconImageHref: 'https://www.svgrepo.com/show/408584/peace-talk-peace-no-war-negotiate.svg'

                                                        }}
                                />
                            )}
                        </Map>
                    </div>
                </YMaps>
            </div>
        </div>
    );
};

export default MapY;