import React from 'react';
import './partners.css';

import jimma from '../../assets/jimma.png';
import betterehealth from '../../assets/betterehealth.png';
import corner from '../../assets/corner.jpg';
import eyelogo from '../../assets/eyelogo.png';
import oromia from '../../assets/oromiya.png';
function Partners() {
  return (
    <div className="partners-wrapper">
      <h2>Our Partners</h2>
      <div className="marquee-container">
        <div className="partner-logos">
          {[jimma, betterehealth, corner, eyelogo, oromia].map((logo, i) => (
            <img src={logo} alt={`Partner ${i}`} key={"first-" + i} />
          ))}
          {[jimma, betterehealth, corner, eyelogo, oromia].map((logo, i) => (
            <img src={logo} alt={`Partner duplicate ${i}`} key={"second-" + i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
