"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Quote = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);
  return (
    <div className="bg-[#EEEEEE] min-h-[495px] flex items-center mt-5 md:mt-10  h-[495px]">
      <div className="flex text-center md:text-start flex-col md:flex-row container mx-auto justify-between items-center max-w-[1037px] h-fit md:h-[440px]  ">
        {/* Left Side */}
        <div
          className="w-full md:w-1/2 order-2 md:order-1 "
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h1 className="text-2xl md:text-4xl lg:text-[38px] font-bold mb-2 relative">
            Get{" "}
            <span className="absolute md:bottom-[6px] md:left-[42px] bottom-[6px] left-[143px]">
              <img
                src="/assets/free.png"
                className="hidden md:block h-[50px] w-[50x] md:h-[96px] md:w-[97px]"
                alt=""
              />
            </span>{" "}
            Boiler Quotes
          </h1>
          <h2 className="text-lg md:text-[21] font-bold mb-2">
            Compare prices today
          </h2>
          <p className="mb-2 font-normal text-sm">No obligation to buy</p>
          <p className="font-normal text-sm md:max-w-[510px] max-w-[80%] mx-auto md:mx-0">
            Visit our guide to get free trustworthy heating engineers in your
            area
          </p>
          <div className="mt-4 flex flex-col md:flex-row gap-3 w-[80%] md:w-full mx-auto md:mx-0">
            <input
              type="text"
              className="border p-2 rounded-md w-full md:w-[242px] outline-none placeholder:font-normal placeholder:text-[#000000]"
              placeholder="Enter Postcode"
            />
            <button className="bg-[#009F78] text-white pt-[11px] pr-[41px] pb-[11px] pl-[41px] rounded-md transition-all ease-in duration-300 hover:bg-[#00745E]">
              Get Quotes
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="mt-8 md:mt-0 hidden md:flex items-center md:ml-8 order-1 md:order-2">
          <div className="h-[250px] md:h-[440px] w-full  rounded-full overflow-hidden">
            <img
              src="/assets/9.png"
              alt="Boiler Image"
              className="object-cover w-full h-full"
              data-aos="fade-left"
              data-aos-duration="2000"
              style={{
                width: "w-full",
                height: "h-[250px] md:h-[440px]",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
