import React, { Component } from 'react'

import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  

import { Switch, Route, BrowserRouter} from "react-router-dom"

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

    const cancel = () => {
        const form = document.querySelector(".form1")
        document.querySelector(".cancel-btn").addEventListener("click", function() {
        if(form.classList.contains("modals")) {
            form.classList.remove("modals")
            }
        })
    }
  
  return (
    <BrowserRouter>
        <Header />
        <div className="whatsapp" onClick={()=> document.location.href="https://wa.me/+2348065050044"}>
            <img src="images/whatsapp.png" alt=""/>
        </div>
        <form name="google-sheet" className="form1">
            <input type="text" name="Name" id="name" placeholder="Name" required={true}/>
            <input type="email" name="Email" id="email" placeholder="Email" required/>
            <input type="number" name="Phone" id="phone" placeholder="Phone Number" required/>
            <textarea name="Message" id="message" cols="30" rows="5" placeholder="Message" required></textarea>
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
    </BrowserRouter>
  );
}

export default App;
