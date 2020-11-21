import React from 'react';
import EstateComponents from "./EstateComponents"

export default function Estates() {
  return (
    <>
        <div className="big-screen-category d-none d-block text-center mt-5 pt-4">
            <h2>Estates</h2>
            <hr/>
        </div>
        <div className="estates-container d-flex container flex-wrap">
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
