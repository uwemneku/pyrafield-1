import React from 'react'
import EstateComponents from "./EstateComponents"
import HomepageSlide from "./HomepageSlide"
import estates from "./estatesData"

export default function Homepage() {

  const EstatesArray = estates.map(estate => <EstateComponents data={estate}/>)
  return (
    <>
        <HomepageSlide />
        <div className="big-screen-category d-none d-block text-center">
            <h2>Estates</h2>
            <hr/>
        </div>
        <div className="estates-container d-flex container flex-wrap px-3">
          {EstatesArray}
        </div>
    </>
  );
}
