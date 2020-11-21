import React from 'react';
import {NavLink} from "react-router-dom"
// import ReactWOW from 'react-wow'

export default function Header () {

  const menu = () => {
    document.querySelector(".small-screen-lists").classList.toggle("open")
    
    document.querySelector(".mobile-button").classList.toggle("close")
  }

  const book = () => {
    document.querySelector(".small-screen-lists").classList.toggle("open")
    
    document.querySelector(".mobile-button").classList.toggle("close")
    document.querySelector("form").classList.toggle("modals")
  }

  return (
    <>
        <div className="header d-flex align-items-center">
          <div className="big-screen-nav d-flex justify-content-between align-items-center container">
            <div className="logo d-flex align-items-center">
                <img src="images/pyrafieldlogo.png" alt="logo" width="199px" />
            </div>
            <div className="big-screen-lists d-none d-md-block">
              <ul className="d-flex m-0 p-0 align-items-center d-none d-md-flex">
                <li className="ml-3"><NavLink to="/">Home</NavLink></li>
                <li className="ml-3"><NavLink to="/Estates">Estates</NavLink></li>
                <li className="ml-3"><NavLink to="/Managers">Managers</NavLink></li>
                <li className="ml-3"><NavLink to="/AboutUs">About Us</NavLink></li>
                <li className="ml-3"><button className="btn btn-sm btn-danger" onClick={book}>Book Appointment</button></li>
              </ul>
            </div>
            <div className="small-screen-lists d-md-none">
              <ul className="d-flex flex-column justify-content-center align-items-center">
                <li className="ml-3"><NavLink to="/" onClick={menu}>Home</NavLink></li>
                <li className="ml-3"><NavLink to="/Estates" onClick={menu}>Estates</NavLink></li>
                <li className="ml-3"><NavLink to="/Managers" onClick={menu}>Managers</NavLink></li>
                <li className="ml-3"><NavLink to="/AboutUs" onClick={menu}>About Us</NavLink></li>
                <li className="ml-3"><button className="btn btn-sm btn-danger" onClick={book}>Book Appointment</button></li>
              </ul>
            </div>
            <div className="mobile-button d-md-none" onClick={menu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
          </div>
        </div>
    </>
  );
}