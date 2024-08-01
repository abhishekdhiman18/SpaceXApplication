import React, { useState } from "react";

const Carousel = ({photos}) => {
  const [current, setCurrent] = useState(0);

  const goToPrev = () => {
    setCurrent((prevIndex) => (
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    ));
  };

  const goToNext = () => {
    setCurrent((prevIndex) => (
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    ));
  };

  return (
    <div className="carousel-container">
      <button onClick={goToPrev} className="arrow-button arrow-button-prev">&lt;</button>
      <img src={photos[current]} alt={`image-${current}`} className="img-carousel" />
      <button onClick={goToNext} className="arrow-button arrow-button-next">&gt;</button>
    </div>
  );
};

export default Carousel;
