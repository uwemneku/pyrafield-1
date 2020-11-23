import React from 'react';
import {Link} from "react-router-dom"


export default function EstateComponents({data}) {
  return (
    <div className="estates-link">
    <Link to = {`/${data.name}`} >
        <div className="estate-component">
            <div className="estate-div">
                
                    <img src={"images/" + data.images[0]} className="houseImg" alt="estatehomepagpic"/>
                
                <div className="home-location d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center address-div">
                    
                        <img src="images/location.png" alt="" srcset="" width="20px"/>
                        <div className="d-flex flex-column address">
                            <p className="m-0 ml-2 ">{data.location ? data.location : null}</p>
                            
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src="images/coo.png" alt="" srcset="" width="20px"/>
                        <p className="m-0 ml-2">{data.title[0]}</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <img src="images/square.png" alt="" srcset="" width="20px"/>
                        <p className="m-0 ml-2">{data.size}</p>
                    </div>
                </div>
                <div className="price-div d-flex justify-content-between mt-3 align-items-center">
                    <div className="price-div-left">
                        <h3 style={{fontSize:20}}>{data.name}</h3>
                    </div>
                    <div className="price-div-right" style={{width:"50%"}}>
                        <h3 style={{fontSize:20, color:"#FF0000", fontWeight:"bolder"}} className="mb-1 ml-auto text-right">{data.price.new}</h3>
                        <p className="stroked mb-0 ml-auto text-right">{data.price.old}</p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    </div>
  );
}
