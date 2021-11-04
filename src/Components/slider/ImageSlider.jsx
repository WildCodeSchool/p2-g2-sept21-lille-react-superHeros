import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import PropTypes from 'prop-types';
import SliderData from './SliderData';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const { length } = slides;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current + 1) % length);
  };

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'}>
            {index === current && (
              <img src={slide} alt="cardImage" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

ImageSlider.propTypes = {
  slides: PropTypes.string.isRequired,
};

export default ImageSlider;
