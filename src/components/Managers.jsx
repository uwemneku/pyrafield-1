import React from 'react';
import ReactWOW from "react-wow"

export default function Managers() {
  return (
    <div className="container mb-5">
        <div className="big-screen-category d-none d-block text-center mt-5 pt-4">
            <h2>Managers</h2>
            <hr/>
        </div>
        <div className="estates-container d-flex container flex-wrap px-3 managers align-items-center pt-5 pb-2 mt-5">
          <ReactWOW animation="fadeInUp">
            <div className="d-flex flex-column align-items-center">
              <img src="images/manager1.png" alt="manager1" width="200px"/>
              <h3 className="text-center">Adebagun James</h3>
              <p className="text-center">CEO/MD</p>
          </div>
          </ReactWOW>
          <ReactWOW animation="fadeInUp">
            <div className="d-flex flex-column align-items-center">
              <img src="images/manager2.jpg" alt="manager2" width="200px" height="200px" style={{objectFit: "cover"}}/>
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
