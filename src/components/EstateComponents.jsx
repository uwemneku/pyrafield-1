import React from 'react';
import {Link} from "react-router-dom"

export default function EstateComponents() {
  return (
    <>
        <div className="estate-component">
            <div className="estate-div">
                <Link to="/estate">
                    <img src="images/house1.png" className="houseImg"/>
                </Link>
                <div className="home-location d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center address-div">
                    
                        <img src="images/location.png" alt="" srcset="" width="20px"/>
                        <div className="d-flex flex-column address">
                            <p className="m-0 ml-2 ">Ido-Ajaye, Eguduwa Agbara,</p>
                            <p className="m-0 ml-2"> Ogun State</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src="images/coo.png" alt="" srcset="" width="20px"/>
                        <p className="m-0 ml-2">Survey Plan</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src="images/square.png" alt="" srcset="" width="20px"/>
                        <p className="m-0 ml-2">600sqm</p>
                    </div>
                </div>
                <div className="price-div d-flex justify-content-between mt-3 align-items-center">
                    <div className="price-div-left">
                        <h3 style={{fontSize:20}}>FreshLand Estate</h3>
                    </div>
                    <div className="price-div-right" style={{width:"50%"}}>
                        <h3 style={{fontSize:20, color:"#FF0000", fontWeight:"bolder"}} className="mb-1 ml-auto text-right">N3.5 Million</h3>
                        <p className="stroked mb-0 ml-auto text-right">N900, 000</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
