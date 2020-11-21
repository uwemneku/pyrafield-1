import React from 'react';
import EstateComponents from "./EstateComponents"
import HomepageSlide from "./HomepageSlide"
import axios from "axios"

export default function Homepage() {
  return (
    <>
        <HomepageSlide />
        <div className="big-screen-category d-none d-block text-center">
            <h2>Estates</h2>
            <hr/>
        </div>
        <div className="estates-container d-flex container flex-wrap px-3">
          <EstateComponents />
          <EstateComponents />
          <EstateComponents />
          <EstateComponents />
          <EstateComponents />
          <EstateComponents />
          <EstateComponents />
          <EstateComponents />
        </div>
        
        
    </>
  );
}
