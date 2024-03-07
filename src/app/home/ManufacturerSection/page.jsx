"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const ManufacturerSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-fit">
      <div className="flex flex-col items-center md:justify-between w-full max-w-6xl gap-4 md:gap-3 h-fit">
        <h1 className="mt-3 text-xl md:text-2xl lg:text-[26px] font-bold items-center">
          Browse Top Manufacturers
        </h1>
        <p className="text-center max-w-[449px] font-normal text-sm text-[#000000]">
          Find the boiler that fits your needs from the top renowned
          manufacturers liked by hundreds of consumers.
        </p>

        <div className="flex gap-2 md:gap-4 items-center my-3 md:my-8">
          <Image
            src="/assets/8.png" // Make sure the path is correct and starts with a forward slash
            alt="Manufacturers"
            className=""
            data-aos="fade-up"
            data-aos-duration="1000"
            width={925} // Set the width (replace with the actual width)
            height={417} // Set the height (replace with the actual height)
          />
        </div>

        <button className="bg-[#009F78] text-white py-2 px-6 rounded-md transition-all ease-in duration-300 hover:bg-[#00745E]">
          Browse Manufacturers
        </button>
      </div>
    </div>
  );
};

export default ManufacturerSection;
