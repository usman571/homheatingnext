"use client"
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const GetInTouchSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);
  return (
    <div className="bg-[#00BF8F] py-8 md:py-16 mt-8 mb-6 md:h-[256px] h-fit">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:justify-start justify-between max-w-[934px]">
        <div
          className="text-white text-center  md:text-left mb-6 md:mb-0 transition-all duration-500 flex flex-col justify-center items-center md:justify-start md:items-start"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="md:text-[26px] md:text-start text-[18px] lg:text-2xl font-bold mb-4">
            Apply for ECO4 Scheme if you are on UK Gov benefits.
          </h1>
          <p className="text-base font-normal md:max-w-3xl max-w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id
            malesuada erat, et vestibulum ex. Praesent porta accumsan ex sed
            interdum.
          </p>
        </div>

        <button
          data-aos="fade-left"
          data-aos-duration="2000"
          className="bg-[#009F78] text-white px-8 py-2 rounded-md transition-all ease-in duration-300 hover:bg-[#00745E]"
        >
          Get In Touch
        </button>
      </div>
    </div>
  );
};

export default GetInTouchSection;
