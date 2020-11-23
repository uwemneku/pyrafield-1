import React, {useEffect} from 'react'

import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  

import { Switch, Route, HashRouter} from "react-router-dom"

import ReactWOW from "react-wow"

import './App.css';
import EstateDetails from './components/EstateDetails'
import Header from './components/Header.jsx'
import Homepage from "./components/Homepage"
import Footer from "./components/Footer"
import AboutUs from "./components/AboutUs"
import Estates from "./components/Estates"
import Managers from "./components/Managers"
import ScrollToTop from "./components/ScrollToTop"


function App() {
    console.log(window.location.pathname)
    const cancel = () => {
        const form = document.querySelector(".form1")
        document.querySelector(".cancel-btn").addEventListener("click", function() {
        if(form.classList.contains("modals")) {
            form.classList.remove("modals")
            }
        })
    }

    useEffect(()=> {
        setTimeout(()=>{
            document.querySelector(".cover").style.opacity = 0
        },4000)
    })
  
  return (
    <HashRouter>
        <Header />
        <div className="cover">
            <div className="cover-page">
                <img src="images/CIRCLE.png" alt="preloader" width="100%"/>
            </div>
            <p className="text-white text-center">AMAZING OFFERS AT AFFORDABLE PRICES</p>
        </div>
        
        <div className="whatsapp" onClick={()=> document.location.href="https://wa.me/+2348065050044"}>
            <img src="images/whatsapp.png" alt="whatsapp icon"/>
        </div>
        <div className="success-cover">
            <button className="success-button mb-3"><p className="mb-0 mr-2">Submitted</p><img src="images/successbtn.png" alt="successicon" width="30px"/></button>
            <p className="text-white text-center">A servive representative from Pyrafield Homes will contact you Shortly</p>
        </div>
        <form name="google-sheet" className="form1">
            <div className="input-name mb-3">
                <input type="text" name="Name" id="name" placeholder="Name" required/>
                <span></span>
            </div>

            <div className="input-email mb-3">
                <input type="email" name="Email" id="email" placeholder="Email" required/>
                <span></span>
            </div>
            <div className="input-phone mb-3">
                <input type="number" name="Phone" id="phone" placeholder="Phone Number" required/>
                <span></span>
            </div>
           <div className="input-message mb-3">
                <textarea name="Message" id="message" cols="30" rows="5" placeholder="Message" required></textarea>
                <span></span>
           </div>
            <div className="d-flex">
                <button className="submit">Submit</button>
                <div className="cancel-btn ml-3 bg-danger text-white" onClick={cancel}>Cancel</div>
            </div>
        </form>
        <ScrollToTop />
            <Switch>
                <Route exact path='/'>
                    <Homepage/>
                </Route>
                <Route exact path='/Estates'>
                    <Estates />
                </Route>
                <Route exact path="/AboutUs">
                    <AboutUs />
                </Route>
                <Route exact path="/Managers">
                    <Managers />
                </Route>
                <Route exact path='/:estate'>
                    <EstateDetails />
                </Route>
                
            </Switch>
        <Footer />
    </HashRouter>
  );
}

export default App;
