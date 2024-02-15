import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        {/* <img src ={img}/> */}
        <p className="footer-links">
          <a href="#" className="link-1">Home</a>
          <a href="#">About</a>
          <a href="#">Recyclage</a>
          <a href="#">Services</a>
        </p>
        <p className="footer-company-name">Recyclage Hub © 2023</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p><span>Recyclage Hub</span></p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>+216 99.526.358</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p><a href="mailto:support@company.com">support@Recyclage_Hub.com</a></p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About Us</span>
          Transform your habits and mindset with our recycling programs. We believe in providing a holistic approach to environmental well-being, focusing on both individual actions and community initiatives. Our experienced team and eco-friendly strategies are here to guide you on your journey to a more sustainable life.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
