"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowSlider from "../../../assets/ArrowSlider.svg";
import Image from "next/image";
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
      className="top-[50%] absolute w-[20px] h-[20px] translate-x-0 translate-y-[-50%] left-[0px] cursor-pointer"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Image className=" rotate-[-180deg]" src={ArrowSlider} alt="Arrow" />
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
const ScheduleSlider = () => {
  return (
    <div className="slider-container  flex-1  ">
      <Slider className="p-5" {...settings}>
        <button>
          <h1>пн</h1>
          <span>12</span>
        </button>
        <button>
          <h1>вт</h1>
          <span>12</span>
        </button>
        <button>
          <h1>ср</h1>
          <span>12</span>
        </button>
        <button>
          <h1>чт</h1>
          <span>12</span>
        </button>
        <button>
          <h1>пт</h1>
          <span>12</span>
        </button>
        <button>
          <h1>ст</h1>
          <span>12</span>
        </button>
        <button>
          <h1>вс</h1>
          <span>12</span>
        </button>
        <button>
          <h1>пн</h1>
          <span>12</span>
        </button>
        <button>
          <h1>пн</h1>
          <span>12</span>
        </button>
      </Slider>
    </div>
  );
};

export default ScheduleSlider;
