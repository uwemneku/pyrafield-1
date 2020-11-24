import React from 'react';
import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  


import 'owl.carousel/dist/assets/owl.theme.default.css';  

export default function HomepageSlide() {
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
        <div className="homepage-slide">
          <OwlCarousel 
                loop
                autoplay
                margin={10}
                responsive = {state.responsive}
                >   
                <img src="images/hero1.png" alt="heroslide1" srcset="" width="100%"/>
                <img src="images/hero2.png" alt="heroslide2" srcset="" width="100%"/>
                <img src="images/hero3.png" alt="heroslide3" srcset="" width="100%"/>
                <img src="images/hero4.png" alt="heroslide4" srcset="" width="100%"/>
                <img src="images/hero5.png" alt="heroslide4" srcset="" width="100%"/>
            </OwlCarousel> 
        </div>
    </>
  );
}
