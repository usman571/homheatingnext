import React from "react";
import CarouselComponent from "@/components//home/CarouselComponent";
import { blogData } from "@/constants/data";

const NewsSection = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center h-[615px] bg-[#FBFBFE]">
      <div className="w-full sm:max-w-[600px] md:max-w-[1073px] h-fit relative sm:mx-auto">
        <h1 className="text-xl md:text-2xl lg:text-[26px] font-bold text-center">
          News & Updates
        </h1>
        <p className="text-center max-w-[400px] font-normal text-sm text-[#000000] pt-2 mx-auto">
          Explore UKs energy news and updates
        </p>
        <CarouselComponent data={blogData} />
      </div>
    </div>
  );
};

export default NewsSection;
