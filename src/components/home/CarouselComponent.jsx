"use client"
import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 200 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 749, min: 0 },
    items: 1,
  },
};

const CarouselComponent = ({ data }) => {
  const carouselRef = useRef(null);

  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className="max-w-[250px] mx-auto sm:max-w-[700px] sm:mx-auto lg:max-w-[1073px] relative">
      <MdKeyboardArrowLeft
        onClick={handlePrevious}
        className="cursor-pointer text-[#7E7E7E] text-[40px] absolute top-56 left-[35px]  lg:-left-[48px] sm:top-56 sm:left-[15px]"
      />
      <Carousel
        arrows={false}
        responsive={responsive}
        infinite
        containerClass="carousel-container"
        itemClass="carousel-item"
        ref={carouselRef}
      >
        {data.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </Carousel>
      <MdKeyboardArrowRight
        onClick={handleNext}
        className="cursor-pointer text-[#7E7E7E] text-[40px] absolute top-56 right-[35px]  lg:-right-[48px] sm:top-56 sm:right-[15px]"
      />
    </div>
  );
};

export default CarouselComponent;
