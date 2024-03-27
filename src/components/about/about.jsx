import React from 'react';
import './about.css'
import ThirdImage from "../../assets/about-us.png";

const AboutUs = () => {
  const heading = 'Welcome to Koko Bliss, your one-stop destination for all things related to permanent makeup.';
  const subtitle1 = 'Welcome to Koko Bliss, your ultimate destination for tranquility and rejuvenation in the beautiful city of Nice. We are thrilled to have you here, and we are committed to providing you with an unparalleled experience that will leave you feeling refreshed and revitalized.';
  const subtitle2 = 'At Koko Bliss, we believe in the power of self-care and the importance of taking time for oneself. Our team of dedicated professionals is dedicated to ensuring that your visit is nothing short of exceptional, providing personalized services tailored to your unique needs and preferences \n Thank you for choosing Koko Bliss. We are excited to be a part of your journey towards relaxation and well-being.'
  
  return (
    <div className="row">
      <div className="column">
        <img src={ThirdImage} alt="About Us" />
      </div>
      <div className="column">
        <h5>{heading}</h5>
        <p>{subtitle1}</p>
        <p>{subtitle2}</p>
      </div>
    </div>
  );
};

export default AboutUs;
