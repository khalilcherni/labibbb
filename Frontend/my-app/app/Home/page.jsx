
import React from 'react';
import './home.css';
import Navbar from '../Navbar/page';
import Footer from './footer';

const Home = () => {
  return (
    <div className='home-page '>
      <Navbar />

      <header className='header-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='mb-0 text-black fw-bold'>Welcome To</h2>
              <h1 className='mb-5 text-black fw-bold text-center text-sm-start'>
                labibb Hub
              </h1>
            </div>
          </div>
        </div>
      </header>
      <video id='background-video' autoPlay loop muted>
        <source src='/azi.mp4' type='video/mp4' />
      </video>
      <div className='about-section'>
        <div className='container my-5'>
          <div className='row'>
            {/* Removed unused col-lg-6 div */}
            <div className='col'>
              <h2 className='fs-1 mb-5 text-uppercase fw-bold'>Our Mission</h2>
              <p>
                At Recycling Hub, we are dedicated to promoting environmental
                sustainability by encouraging responsible recycling practices.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className='mb-5'>
                Together, we can make a positive impact on the planet by
                reducing waste and promoting a greener, healthier future for
                generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
