import React, { Component } from 'react'

import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  

import './App.scss';
import Navbar from './components/Navbar'
import Body from './components/Left'

function App() {

  const state= {
    responsive:{
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
    <div className="containers">
      <div className="slideshow">
        <OwlCarousel 
            
            loop
            autoplay
            margin={10}
            responsive = {state.responsive}
            >   
            <img src="images/image1.png" alt="" srcset="" width="100%"/>
            <img src="images/image2.png" alt="" srcset="" width="100%"/>
            <img src="images/image3.png" alt="" srcset="" width="100%"/>
            <img src="images/image4.png" alt="" srcset="" width="100%"/>
        </OwlCarousel> 
      </div>
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
                <img src="images/location.png" alt="" srcset="" width="20px"/>
                <p className="m-0 ml-2 address">Ido-Ajaye, Eguduwa Agbara, Ogun State</p>
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
          <p className="mt-2">Crown City Parks and  Resort
          Lagos/Badagry Multilane Expressway
          Badagry Beach
          </p>
        </div>
        <div className="notes ml-3 mr-3 my-4">
          <h4 className="m-0">Payment Plans</h4>
          <p className="mt-2">Ouright - N300, 000 Installmental - N20 000 Minimin Deposit
          </p>
        </div>
        <button className="">
            Book Inspection
        </button>
      </div>
    </div>
  );
}

export default App;
