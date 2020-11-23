import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
        <div className="container">
          <p>Sign Up to our Newsletter</p>
          <form className="d-flex subscribers align-items-center" name="subscribers">
            <input type="email" placeholder="Email" className="footer-email mr-4" name="Email"/>
            
            <button>Submit</button>
          </form>
          <span className="font-weight-bold"></span>
          <div className="mt-4 d-flex align-items-center" onClick={() => document.location.href="mailto:info@pyrafieldhomes.com"}>
            <i className="fas fa-mail-bulk mr-3" style={{fontSize: 30}}></i><p className="mb-0">info@pyrafieldhomes.com</p>
          </div>
          <div className="mt-4 d-flex align-items-center"onClick={() => document.location.href="tel:+2348065050044"}>
            <i className="fas fa-phone mr-3" style={{transform: "rotateY(190deg)", fontSize: 30}}></i><p className="mb-0">+2348065050044</p>
          </div>
          <div className="mt-4 d-flex align-items-center" onClick={() => document.location.href="https://web.facebook.com/pyrafieldhomesng/"}>
            <i className="fab fa-facebook mr-3" style={{fontSize: 30}}></i><p className="mb-0">facebook</p>
          </div>
          <div className="mt-5">
            <p className="text-center mb-1"><i className="fas fa-copyright text-white"></i> 2020 Pyrafield Homes Limited</p>
            <p className="text-center mb-0">Developed by <a href="tel:+2348187190727" className="text-white" style={{textDecoration:"underline"}}>Wisdom Osara</a></p>
          </div>
        </div>
        
    </div>
  );
}
