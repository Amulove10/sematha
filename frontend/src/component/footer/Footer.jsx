import React from 'react';
import './ffooter.css'
import logo from '../../assets/logo_dark.png'
function Footer() {
  return (
    <div className='footer'>
      <footer>
        <div className="left">
         <img src={logo} alt="" />
          <p>A trusted software development partner, pioneering <br/> innovation in transformable digital solutions.</p>
        </div>
        <div className="middle">
          <h2>Quick Links</h2>
          <a href="#service">Services</a>
          <a href="#project">Projects</a>
          <a href="#about">About</a>
          <a href="#team">Team</a>
          
        </div>
        <div className="right">
        <h2>Social Links</h2>
        <a className='facebook' href="" target="_blank"><i  class="fab fa-facebook-f"></i></a>
        <a className='instagram' href="" target="_blank"><i  class="fab fa-instagram"></i></a>
        <a className='twitter' href="" target="_blank"><i  class="fab fa-twitter"></i></a>
        <a className='pinterest' href="" target="_blank"><i  class="fab fa-pinterest"></i></a>

        </div>
         <div className="right">
        <h2>contact </h2>
       <a className='facebook' href="mailto:hello@sematha.com">
  <i className="fas fa-envelope"></i> hello@sematha.com
</a>

<a className='facebook' href="tel:+251934060939">
  <i className="fas fa-phone"></i> +251 934 060 939
</a>

        </div>
        </footer>
    </div>
  );
}

export default Footer;
