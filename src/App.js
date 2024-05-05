import React from "react";

import images from "./data/images";

import CustomSlider from "./components/custom.slider";

import './index.css';

export default function App() {
  return (
    <div className="App">
      <CustomSlider>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomSlider>
      
    </div>
  );
}
