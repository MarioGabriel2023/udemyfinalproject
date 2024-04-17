import React, { useState, useEffect, useCallback } from "react";
import "./Header.css";
import image2 from "../../assets/image2.jpg";
import image1 from "../../assets/image1.jpg";

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: image2,
      title: "Viseaza indraznet",
      description: "Gaseste un curs care te ajuta sa ajungi acolo unde vrei.",
    },
    {
      image: image1,
      title: "Au sosit noi reviewuri",
      description: "Cumpara cursuri cu evaluari foarte bune de la doar 59,99 RON.",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? "slide active" : "slide"}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
