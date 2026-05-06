import React, { useEffect, useState } from "react";
import "./SliderAnimation.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import sliderImage from "../../assets/projects/slider.jsx";
const Slider = () => {
  let index = 1;
  setInterval(() => {
    if (index >= 6) {
      index = 1;
      index++;
    }
    index++;
  }, 3000);

  return (
    <div className="w-full h-max items-center flex flex-col p-8 gap-4 justify-end relative">
      {sliderImage.map((slide) => {
        return (
          <>
            <img
              key={slide.id}
              src={slide.image}
              alt={slide.title}
              className={`w-100 h-50 duration-300 shadow-2xl image${index < 6 ? index++ : (index = 1)} rounded-xl `}
            />
            <h1 className="text-4xl text-white font-bold px-4 p-1 backdrop-blur-xl rounded-full ">
              {slide.title}
            </h1>
            {/* <h1 className={`text-white`}>{slide.info}</h1> */}
          </>
        );
      })}
      <div className="w-full flex gap-10 justify-center">
        <button className="p-4 bg-[var(--primary)]/70 text-green-950 rounded-full">
          <FaChevronLeft />
        </button>
        <button
          className="p-4 bg-[var(--primary)]/70 text-green-950 rounded-full"
          onClick={() => setInterval()}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
