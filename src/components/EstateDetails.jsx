import React from 'react'

import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  
import {useParams, useRouteMatch} from "react-router-dom"

import 'owl.carousel/dist/assets/owl.theme.default.css';  

import ReactWOW from "react-wow"



export default function EstateDetails() {
    let params = useParams()
    let match  = useRouteMatch()
    console.log(params)
    console.log(match)
    const state = {
        responsive : {
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    }

  return (
    <>
        <div className="containers container">
            <div className="slideshow">
                <OwlCarousel 
                    loop
                    autoplay
                    margin={10}
                    responsive = {state.responsive}
                    >   
                    <img src="images/image1.png" alt="" width="100%"/>
                    <img src="images/image2.png" alt="" width="100%"/>
                    <img src="images/image3.png" alt="" width="100%"/>
                    <img src="images/image4.png" alt="" width="100%"/>
                </OwlCarousel> 
            </div>
            <ReactWOW animation='fadeInUp'>
                <div className="description">
                    <div className="description-header">
                        <div className="left-header">
                        <h3>City Gardens Estate</h3>
                        </div>
                        <div className="right-header d-flex justify-content-center align-items-center">
                        <h3>N300, 000</h3>
                        </div>
                    </div>
                    <div className="location d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img src="images/location.png" alt="" width="20px"/>
                            <div className="d-flex flex-column address-div">
                                <p className="m-0 ml-2 address">Ido-Ajaye, Eguduwa Agbara,</p>
                                <p className="m-0 ml-2"> Ogun State</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src="images/coo.png" alt="" width="20px"/>
                            <p className="m-0 ml-2">Survey Plan</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src="images/square.png" alt="" width="20px"/>
                            <p className="m-0 ml-2">600sqm</p>
                        </div>
                    </div>
                    <div className="notes ml-3 mr-3 my-4">
                    <h4 className="m-0">Description</h4>
                        <p className="mt-2">City gardens estate is located a commercial and industrial area. It is a virgin land in a fast developing enviroment</p>
                    </div>
                    <div className="notes ml-3 mr-3 my-4">
                    <h4 className="m-0">Feautures</h4>
                        <p className="mt-2">Virgin Land</p>
                        <p>100% Dry Lands</p>
                        <p>600sqm per plot</p>
                        <p>Industrial and commmercial Neighbourhood</p>
                    </div>
                    <div className="notes ml-3 mr-3 my-4">
                        <h4 className="m-0">Neighbourhood</h4>
                        <p className="mt-2">Crown City Parks and  Resort</p>
                        <p>Lagos/Badagry Multilane Expressway</p>
                        <p>Badagry Beach</p>
                    </div>
                    <div className="notes ml-3 mr-3 my-4">
                    <h4 className="m-0">Payment Plans</h4>
                        <p className="mt-2">Ouright - N300, 000</p>
                        <p> Installmental - N20 000 Minimin Deposit</p>
                    </div>
                    <a onClick={()=> document.location.href = 'tel:+2348065050044'}><button>Book Inspection</button></a>
                </div>
            </ReactWOW>
        </div>
    </>
  );
}



