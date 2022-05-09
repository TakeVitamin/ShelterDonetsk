import React from 'react'
import data from '../store/data.json'
import { v4 as uuidv4 } from 'uuid';

export const useFeatures = () => {
    const features = data.map(s => ({
        type: "Feature",
        id: uuidv4(),
        geometry: {
            type: "Point",
            coordinates: s.coord
        },
        properties: {
            balloonContentHeader: `Адрес: ${s.adress} `,
            balloonContentBody: `<div><b>Ответственное лицо: </b> ${s.name}</div>
                                 <div><b>Доступность:</b>  ${s.keys} </div>`,
            balloonContentFooter: `<b>Вместимость</b>: ${s.seats} человек`
        },
        options: {
            iconLayout: "default#image",
            iconImageSize: [40, 40],
            iconImageHref: 'https://cdn0.iconfinder.com/data/icons/peace-not-war/32/peaceful_peace_symbol_hand_banner-29-512.png'
        }
    }
    ));

    return [features]


}
