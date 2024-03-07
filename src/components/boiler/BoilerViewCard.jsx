import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const BoilerViewCard = ({ model, type, fuel, efficency }) => {
  return (
    <div className="w-full  h-[76px] rounded-[3px]  border border-[#D9D9D9] flex items-center justify-between px-6 py-2 z-0 ">
      <div className="space-y-2 min-w-[210px]">
        <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
          Model
        </p>
        <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
          {model}
        </p>
      </div>
      <div className="space-y-2 min-w-[135px]">
        <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
          Type
        </p>
        <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
          {type}
        </p>
      </div>
      <div className="space-y-2 min-w-[135px]">
        <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
          Fuel
        </p>
        <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
          {fuel}
        </p>
      </div>
      <div className="space-y-2 min-w-[135px]">
        <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
          Efficiency
        </p>
        <button className="rounded-[5px] w-[67px] h-[26px] flex items-center justify-center bg-[#009F7830] text-[13px] font-bold leading-[15px] ">
          {efficency}
        </button>
      </div>
      <div className="space-y-2 min-w-[135px] self-end my-auto">
        <MdKeyboardArrowRight className="cursor-pointer text-[#7E7E7E] text-[40px]" />
      </div>
    </div>
  );
};

export default BoilerViewCard;
