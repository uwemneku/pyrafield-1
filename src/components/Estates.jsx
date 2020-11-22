import React from 'react';
import EstateComponents from "./EstateComponents"
import {useParams} from "react-router-dom"
import estates from "./estatesData"

export default function Estates() {
  let params = useParams()
  let EstateArray = estates.map(estate => <EstateComponents data={estate}/>)
  return (
    <>
        <div className="big-screen-category d-none d-block text-center mt-5 pt-4">
            <h2>Estates</h2>
            <hr/>
        </div>
        <div className="estates-container d-flex container flex-wrap">
          {EstateArray}
        </div>
    </>
  );
}
