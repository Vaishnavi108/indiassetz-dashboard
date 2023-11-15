import React, { useState } from "react";
import LeftArrow from "../assets/images/LeftArrow.png";
import RightArroww from "../assets/images/RightArroww.png";

const CarouselTwo = ({
  slides,
  itemsPerSlide,
  captions,
  captionsTwo,
  customComponent,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(slides.length / itemsPerSlide);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    if (isFirstSlide) {
      return;
    }

    const newIndex = currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === totalSlides - 1;
    if (isLastSlide) {
      return;
    }

    const newIndex = currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const sliderStyles = {
    position: "relative",
    height: "100%",
    overflow: "hidden",
  };

  const slideStylesWidthBackground = {
    width: `${100 * totalSlides}%`,
    display: "flex",
    transform: `translateX(-${(currentIndex * 100) / totalSlides}%)`,
    transition: "transform 0.5s ease",
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "37%",
    transform: "translate(0, -50%)",
    left: "15px",
    zIndex: 1,
    backgroundImage: `url(${LeftArrow})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "60px",
    height: "90px",
    cursor: "Pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "37%",
    transform: "translate(0, -50%)",
    right: "-6px",
    zIndex: 1,
    backgroundImage: `url(${RightArroww})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    width: "40px",
    height: "90px",
    cursor: "Pointer",
  };

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}></div>
        <div onClick={goToNext} style={rightArrowStyles}></div>
      </div>
      <div style={slideStylesWidthBackground}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={{
              width: `${100 / totalSlides}%`,
              padding: "15px",
              boxSizing: "border-box",
              textAlign: "center",
            }}
          >
            <img src={slide.url} alt={slide.title} style={{ width: "100%" }} />
            {captions && captions[slideIndex] && (
              <div style={{ marginTop: "10px" }}>{captions[slideIndex]}</div>
            )}
            {captionsTwo && captionsTwo[slideIndex] && (
              <div style={{ marginTop: "10px" }}>{captionsTwo[slideIndex]}</div>
            )}
            {customComponent && (
              <div style={{ position: "absolute", top: 0, left: 0 }}>
                {customComponent}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselTwo;
