import React from 'react';
import ReactWOW from "react-wow"

export default function AboutUs() {
  return (
    <div className="container mb-5">
        <div className="big-screen-category d-none d-block text-center mt-5 pt-3">
            <h2>About Us</h2>
            <hr/>
        </div>
        <div className="about-text">
          <ReactWOW animation="fadeInRight">
            <p className="mb-0">Pyrafield Homes Limited is a real estate company, primarily engaged in property investment and development. Our interests cut across property development, sales and evaluation. "Additional services includes; Free advisory consulltancy. With concepts, we bring high level solutions in areas of achitectural designs, Land survey, Realtor Trainning Programmes to assist upcoming propety enthusiast to maintain relevance in the hghly competitive industry</p>
          </ReactWOW>
        </div>

        <div className="big-screen-category d-none d-block text-center">
            <h2>Mission Statement</h2>
            <hr/>
        </div>
        <div className="about-text">
        <ReactWOW animation="fadeInRight">
            <p className="mb-0">We are a private limited liabilty company that exist to offer excellent services  that exceed our customers expectation through innovative products providing amazing real estate offers</p>
          </ReactWOW>
        </div>

        <div className="big-screen-category d-none d-block text-center">
            <h2>Core Values</h2>
            <hr/>
        </div>
        <div className="d-flex flex-wrap">
          <ReactWOW animation="fadeInLeft"><p className="mobile-values" style={{fontSize:25, marginRight: 25, borderLeft:"2px solid rgb(65, 223, 184)", paddingLeft: "20px"}}>Loyalty</p></ReactWOW>
          <ReactWOW animation="fadeInLeft" delay="0.2s"><p className="mobile-values" style={{fontSize:25, marginRight: 25, borderLeft:"2px solid rgb(65, 223, 184)", paddingLeft: "20px"}}>Honesty</p></ReactWOW>
          <ReactWOW animation="fadeInLeft" delay="0.4s"><p className="mobile-values" style={{fontSize:25, marginRight: 25, borderLeft:"2px solid rgb(65, 223, 184)", paddingLeft: "20px"}}>Trust</p></ReactWOW>
          <ReactWOW animation="fadeInLeft" delay="0.4s"><p className="mobile-values" style={{fontSize:25, marginRight: 25, borderLeft:"2px solid rgb(65, 223, 184)", paddingLeft: "20px"}}>Ingenuity</p></ReactWOW>
          <ReactWOW animation="fadeInLeft" delay="0.6s"><p className="mobile-values" style={{fontSize:25, marginRight: 25, borderLeft:"2px solid rgb(65, 223, 184)", paddingLeft: "20px"}}>Accountability</p></ReactWOW>
          <ReactWOW animation="fadeInLeft" delay="0.6s"><p className="mobile-values" style={{fontSize:25, marginRight: 25, borderLeft:"2px solid rgb(65, 223, 184)", paddingLeft: "20px"}}>Simplicity</p></ReactWOW>
          <ReactWOW animation="fadeInLeft" delay="0.6s"><p className="mobile-values" style={{fontSize:25, marginRight: 25, borderLeft:"2px solid rgb(65, 223, 184)", paddingLeft: "20px"}}>Respect</p></ReactWOW>
        </div>

        <div className="big-screen-category d-none d-block text-center mt-5 pt-4">
            <h2>Managers</h2>
            <hr/>
        </div>

        <div className="estates-container d-flex container flex-wrap px-3 managers align-items-center pt-4 pb-2">
          <ReactWOW animation="fadeInUp">
            <div className="d-flex flex-column align-items-center">
              <img src="images/manager1.png" alt="manager1" width="200px"/>
              <h3 className="text-center">Adebagun James</h3>
              <p className="text-center">CEO/MD</p>
          </div>
          </ReactWOW>
          <ReactWOW animation="fadeInUp">
            <div className="d-flex flex-column align-items-center">
              <img src="images/manager2.jpg" alt="manager2" width="200px" height="200px" />
              <h3 className="text-center">Ibidire K. Adetunji</h3>
              <p className="text-center">Business Development Manager</p>
          </div>
          </ReactWOW>
          <ReactWOW animation="fadeInUp">
            <div className="d-flex flex-column align-items-center">
              <img src="images/manager3.png" alt="manager3" width="200px"/>
              <h3 className="text-center">Oge Brown</h3>
              <p className="text-center">Legal/Hr Manager</p>
          </div>
          </ReactWOW>
        </div>
    </div>
  );
}
