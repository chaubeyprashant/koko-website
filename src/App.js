import React from 'react';
import './App.css';
import Header from './components/header/header';
import ImageSlider from './components/banner/banner';
import FirstImage from "./assets/bedroom-banner.png.png";
import SecondImage from "./assets/1.png";
import ThirdImage from "./assets/2.png";
import AboutUs from './components/about/about';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <ImageSlider/>
        <AboutUs/>
      </div>
    </div>
  );
}

export default App;
