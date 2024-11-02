"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./style.css";

export default function CarouselBranch({ slides = [], autoSlide = false, autoSlideInterval = 3000 }) {
  console.log("slides:", slides);
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="carousel-container">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {Array.isArray(slides) &&
          slides.map((slide, index) => (
            <div key={index} className="carousel-slide w-full h-full flex flex-col justify-center items-center border-8 rounded-2xl border-primary">
              <Image src={slide.image} alt="carousel-img" width={457} height={327} className="object-cover" />
            </div>
          ))}
      </div>
      <div className="z-10 inset-0 flex items-center justify-between pt-10">
        <button className="absolute left-0" onClick={prevSlide}>
          <Image src={"/Left-Button.png"} alt="logo" width={40} height={40} />
        </button>
        <button className="absolute right-0" onClick={nextSlide}>
          <Image src={"/Right-Button.png"} alt="logo" width={40} height={40} />
        </button>
      </div>
    </div>
  );
}
