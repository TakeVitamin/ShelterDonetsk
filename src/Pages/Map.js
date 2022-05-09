import React, { useState } from 'react';
import { GeolocationControl, Map, ObjectManager, Placemark, SearchControl, YMaps } from "react-yandex-maps";
import s from '../App.module.css'
import q from '../images/peace.svg'
import { YMAPS_QUERY } from "../store/q";
import { useFeatures } from "../hooks/useFeatures.js";

const MapY = () => {
    const [features] = useFeatures()
    return (
        <div>
            <div className="App">
                <YMaps query={YMAPS_QUERY}>
                    <div className={s.zindex}>
                        <Map className={s.map}
                            defaultState={{ center: [47.99899, 37.802837], zoom: 11, }}
                            options={{}}
                            modules={["geolocation", "geocode"]}
                        >
                            <ObjectManager
                                options={{
                                    clusterize: false,
                                }}
                                objects={{
                                    openBalloonOnClick: true,
                                    preset: "islands#greenDotIcon"
                                }}
                                defaultFeatures={features}
                                modules={["objectManager.addon.objectsBalloon"]}
                            />
                            <SearchControl options={{
                                placeholderContent: "Найти убежище рядом с вами",
                                position: {
                                    top: "4vh",
                                    right: "10%",
                                },
                            }} />

                        </Map>
                    </div>
                </YMaps>
            </div>

        </div>);
};

export default MapY;