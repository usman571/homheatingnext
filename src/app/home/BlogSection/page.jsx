import React from "react";
import CarouselComponent from "@/components/home/CarouselComponent";
import { blogData } from "@/constants/data";

const BlogSection = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center h-[615px] bg-[#FBFBFE]">
      <div className="w-full sm:max-w-[600px] md:max-w-[1073px] h-fit relative sm:mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-[26px] font-bold text-center">
          Blogs
        </h1>
        <p className="text-center max-w-[400px] font-normal text-sm text-[#000000] pt-2 mx-auto">
          Find out if you’re eligible for help with your heating
        </p>
        <CarouselComponent data={blogData} />
        <button className="bg-[#009F78] flex items-center justify-center text-white py-2 px-6 rounded-md mt-6 transition-all ease-in duration-300 hover:bg-[#00745E] mx-auto">
          Browse All Blogs
        </button>
      </div>
    </div>
  );
};

export default BlogSection;
