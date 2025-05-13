"use client";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowSlider from "../../../assets/ArrowSlider.svg";
import Image from "next/image";
import { fillCurrentMonth } from "@/utils/fillCurrentMonth";
import useScheduleStore from "@/store/useSchedule";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        "top-[50%] absolute w-[20px] h-[20px] translate-x-0 translate-y-[-50%] right-0 cursor-pointer"
      }
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Image src={ArrowSlider} alt="Arrow" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="top-[50%] absolute w-[20px] h-[20px] translate-x-0 translate-y-[-50%] -left-[0px] cursor-pointer"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Image className=" -rotate-180" src={ArrowSlider} alt="Arrow" />
    </div>
  );
}
const settings = {
  // dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //     },
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2,
  //       initialSlide: 2,
  //     },
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //     },
  //   },
  // ],
};
const calendar = fillCurrentMonth();
const ScheduleSlider = () => {
  const sliderRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(() => {
    const initialIndex = calendar.findIndex((item) => item.isCurrent);

    return initialIndex !== -1 ? initialIndex : 0;
  });
  const { setScheduleDay } = useScheduleStore();
  useEffect(() => {
    if (sliderRef.current && selectedIndex !== null) {
      sliderRef.current.slickGoTo(selectedIndex);
    }
    setScheduleDay(calendar[selectedIndex]);
  }, [selectedIndex]);

  const handleDayClick = (index, day) => {
    setSelectedIndex(index);
  };

  return (
    <div className="slider-container flex-1">
      <Slider
        ref={(slider) => (sliderRef.current = slider)}
        className="p-5"
        {...settings}
      >
        {calendar.map((item, index) => (
          <button
            key={index}
            onClick={() => handleDayClick(index, item)}
            className={`rounded-lg p-2 transition-colors ${
              index === selectedIndex
                ? "bg-primary text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <h1 className="text-sm font-medium">{item.day}</h1>
            <span className="text-lg">{item.number}</span>
          </button>
        ))}
      </Slider>
    </div>
  );
};
export default ScheduleSlider;
