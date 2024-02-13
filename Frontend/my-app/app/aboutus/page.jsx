// pages/aboutus.jsx

import React from 'react';
import './about.css'
const AboutUs = () => {
  return (
    <div>
      <section className="about" id="about">
        <img
          className="coach_image"
          src="https://st4.depositphotos.com/12985790/19950/i/450/depositphotos_199509362-stock-photo-cropped-view-volunteers-recycling-box.jpg"
          alt="Recycling Team"
        />
        <div className="coach-paragraph">
          <h1 className="p">Our Recycling Team</h1>
          <p>
            Meet our dedicated team of environmentalists, each specializing in a unique area of recycling. From plastic recycling to waste reduction, our team is passionate about guiding you to contribute to a sustainable environment. Get to know each member and their expertise to enhance your recycling experience.
          </p>
        </div>
        <div className="content">
          <div className="image">{/* Add your recycling-related image here */}</div>
          <h1 className="title">Every day is a chance to contribute to a greener world</h1>
          <p>
            Transform your habits and mindset with our recycling programs. We believe in providing a holistic approach to environmental well-being, focusing on both individual actions and community initiatives. Our experienced team and eco-friendly strategies are here to guide you on your journey to a more sustainable life.
          </p>
          <div className="box-container">
            <div className="box">
              <h3>
                <i className="fas fa-check"></i> Recycling Practices
              </h3>
              <p>
                Achieve balance in your environmental impact by adopting sustainable recycling practices. Our programs are designed to promote overall well-being, encompassing responsible waste management and eco-friendly habits.
              </p>
            </div>
            <div className="box">
              <h3>
                <i className="fas fa-check"></i> Sustainable Living
              </h3>
              <p>
                Embrace a sustainable lifestyle that goes beyond just recycling. We provide guidance on reducing your ecological footprint, making environmentally conscious choices, and participating in community initiatives.
              </p>
            </div>
            <div className="box">
              <h3>
                <i className="fas fa-check"></i> Eco-friendly Strategies
              </h3>
              <p>
                Our expert environmentalists employ effective strategies that are tailored to your eco-friendly goals. We believe in a personalized approach to ensure you make a positive impact on the planet.
              </p>
            </div>
            <div className="box">
              <h3>
                <i className="fas fa-check"></i> Green Initiatives
              </h3>
              <p>
                Engage in initiatives designed to promote a greener world. Whether you're a beginner or an experienced environmental enthusiast, our diverse programs cater to all levels of commitment to sustainability.
              </p>
            </div>
          </div>
          <a href="#" className="btn">
            Read More
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
