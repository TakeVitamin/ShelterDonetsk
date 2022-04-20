import React from 'react';
import './App.module.css';
import './images/peace.svg'
import BuPop from "./Pages/BuPop";
import MapY from "./Pages/Map";

function App() {
    return (
     <div>
         <BuPop/>
         <MapY/>
     </div>
    );
}

export const MemoizedComponent = React.memo(App);
