import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className='home-page'>
      <header className='header-section'>
        <div className='container'>
          <div className='row'>
            <div className='col1'>
              <h2 className='mb-0 text-black fw-bold'>Welcome To</h2>
              <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>Recycling Hub</h1>
            </div>
          </div>
        </div>
      </header>
      <video id="background-video" autoPlay loop muted>
        <source src="/azi.mp4" type="video/mp4" />
      </video>
      <div className='about-section'>
        <div className='container my-5'>
          <div className='row'>
            <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
              {/* Add content for the left side if needed */}
            </div>
            <div className='col'>
              <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Mission</h2>
              <p>
                At Recycling Hub, we are dedicated to promoting environmental sustainability by encouraging responsible recycling practices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className='mb-5'>
                Together, we can make a positive impact on the planet by reducing waste and promoting a greener, healthier future for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Home;
