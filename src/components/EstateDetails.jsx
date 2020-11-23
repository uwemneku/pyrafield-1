import React from 'react'
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  
import {useParams, useHistory} from "react-router-dom"

import 'owl.carousel/dist/assets/owl.theme.default.css';  
import ReactWOW from "react-wow"
import estates from "./estatesData"



export default function EstateDetails() {
    const book = () => {
        document.querySelector("form").classList.toggle("modals")
      }

    let params = useParams()
 
    const datas = estates.filter(estate => estate.name == params.estate)
    const data = datas[0]
    let History =  useHistory()
      
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
                <div className="backbtn" onClick={() => History.goBack()}>
                    <i className="fas fa-arrow-left"></i>
                </div>
                <OwlCarousel 
                    loop
                    autoplay
                    margin={10}
                    responsive = {state.responsive}
                    >   
                    {data.images.map(image => <img src={"images/" + image} width="100%" alt="slideshow"/>)}
                </OwlCarousel> 
            </div>
            <ReactWOW animation='fadeInUp'>
                <div className="description">
                    <div className="description-header">
                        <div className="left-header">
                        <h3>{data.name}</h3>
                        </div>
                        <div className="right-header d-flex justify-content-center align-items-center">
                        <h3>{data.price.new}</h3>
                        </div>
                    </div>
                    <div className="location d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center longer">
                            <img src="images/location.png" alt="" width="20px"/>
                            <div className="d-flex flex-column address-div">
                                <p className="m-0 ml-2 address">{data.location}</p>
                                
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src="images/coo.png" alt="" width="20px"/>
                            <p className="m-0 ml-2">{data.title[0]}</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src="images/square.png" alt="" width="20px"/>
                            <p className="m-0 ml-2">{data.size}</p>
                        </div>
                    </div>
                    <div className="notes ml-3 mr-3 my-4">
                    <h4 className="m-0">Description</h4>
                        <p className="mt-2">{data.description}</p>
                    </div>
                    {data.title ? <div className="notes ml-3 mr-3 my-4">
                        <h4 className="m-0">Titles</h4>
                        {data.title.map(title => <p>{title}</p>)}
                    </div> : null}
                    <div className="notes ml-3 mr-3 my-4">
                    <h4 className="m-0">Feautures</h4>
                        {data.features.map(feature => <p>{feature}</p>)}
                    </div>
                    {data.neighbourhood ? <div className="notes ml-3 mr-3 my-4">
                        <h4 className="m-0">Neighbourhood</h4>
                        {data.neighbourhood.map(neigbours => <p>{neigbours}</p>)}
                    </div> : null}
                    {data.paymentPlan ? <div className="notes ml-3 mr-3 my-4">
                    <h4 className="m-0">Payment Plans</h4>
                        {data.paymentPlan.map(payment => <p>{payment}</p>)}
                    </div> : null}
                    <a onClick={book} ><button className="bounce">Schedule Inspection</button></a>
                </div>
            </ReactWOW>
        </div>
    </>
  );
}



