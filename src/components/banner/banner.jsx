import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import './banner.css';
import FirstImage from "./assets/bedroom-banner.png.png";
import SecondImage from "./assets/1.png";
import ThirdImage from "./assets/2.png";

const ImageSlider = () => {
  const images = [FirstImage, SecondImage, ThirdImage];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('left');

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setSlideDirection('right');
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setSlideDirection('left');
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNextImage, 3000);
    return () => clearInterval(slideInterval);
  }, [currentImageIndex]);

  return (
    <div className="image-slider">
      <div className={`slider-container ${slideDirection}`}>
        <button className="slider-control previous" onClick={goToPreviousImage}>
          <ChevronLeft size={24}  />
        </button>
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
        <button className="slider-control next" onClick={goToNextImage}>
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
