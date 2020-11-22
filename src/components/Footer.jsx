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
          <div className="mt-4 d-flex align-items-center" onClick={() => document.location.href="mailto:info@pyrafieldhomes.com"}>
            <i class="fas fa-mail-bulk mr-3" style={{fontSize: 30}}></i><p className="mb-0">info@pyrafieldhomes.com</p>
          </div>
          <div className="mt-4 d-flex align-items-center"onClick={() => document.location.href="tel:+2348065050044"}>
            <i class="fas fa-phone mr-3" style={{transform: "rotateY(190deg)", fontSize: 30}}></i><p className="mb-0">+2348065050044</p>
          </div>
          <div className="mt-4 d-flex align-items-center" onClick={() => document.location.href="https://web.facebook.com/pyrafieldhomesng/"}>
            <i class="fab fa-facebook mr-3" style={{fontSize: 30}}></i><p className="mb-0">facebook</p>
          </div>
        </div>
        
    </div>
  );
}
