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
            <p className="text-center mb-1"><a className="text-white" href="https://www.google.com/maps/dir/6.502669,3.0859557/pyrafield+homes+limited/@6.5025207,3.0841743,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x103b795de76ccd8b:0xa89b2fb87faba898!2m2!1d3.0866994!2d6.5023129">Plot 4 koroboji road, off Ajibade bus/stop off Badagry Express Way, Ogun State</a></p>
            <p className="text-center mb-0">Developed with <i class="fas fa-heartbeat text-danger"></i> by <a href="tel:+2348187190727" className="text-white" style={{textDecoration:"underline"}}>Wisdom Osara</a></p>
          </div>
        </div>
        
    </div>
  );
}
