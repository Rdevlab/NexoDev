import React, { useEffect, useState } from "react";
import "./SliderAnimation.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import sliderImage from "../../assets/projects/slider.jsx";
const Slider = () => {
  return (
    <div className="w-full h-full bg-white/10 rounded-4xl relative flex  rounded-4xl overflow-hidden overflow-x-scroll">
      {sliderImage.map((item) => {
        let index = 1;
        return (
          <div key={item.id} className="w-full shrink-0 relative">
            <img src={item.image} className="w-full" />
            <h1 className="absolute bottom-18 right-8 font-bold text-2xl px-4 border border-[var(--primary)] rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
              {item.title}
            </h1>
            <p className="absolute bottom-10 right-8 text-[var(--primary)]">
              {item.info}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
