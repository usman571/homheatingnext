"use client"
import { manufacturersData } from "@/constants/data";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const BoilerFilterManufacturer = () => {
  const [loading, setLoading] = useState(false);
  const [manufacturerId, setManufacturerId] = useState();

  const handleManufacturerCheckboxChange = (id) => {
    setManufacturerId(id);
  };

  return (
    <div>
      <div className="w-[258px] space-y-3">
        <div className="h-[726px]">
          {/* Manufacturers button */}
          <button className="w-full h-[46px] rounded-sm bg-[#009F780F] font-bold text-[14px] text-[#545454]">
            Manufacturers
          </button>

          {/* Search input */}
          <div className="relative ml-4 mt-4">
            <input
              type="text"
              placeholder="Manufacturers name"
              className="placeholder:font-lato placeholder:font-semibold placeholder:text-[14px] placeholder:leading-4 placeholder:text-[#A7A7A7] border border-[#D9D9D9] pt-[7px] pr-[13px] pb-[7px] pl-[12px] rounded-[3px] focus:outline-none w-[223.61px] h-[41.25px]"
            />
            <div className="absolute inset-y-0 right-[57px] pl-1 flex items-center pointer-events-none">
              <CiSearch className="h-6 w-6 md:h-7 md:w-7 text-[#545454] absolute cursor-pointer" />
            </div>
          </div>

          {/* Manufacturers list with scroll */}
          <div className="ml-4 mt-5 space-y-4  h-[586px] overflow-y-scroll">
            {loading ? (
              <p>Loading...</p>
            ) : (
              manufacturersData.map((manufacturer) => (
                <div key={manufacturer.id} className="flex items-center gap-2">
                  <input
                    className="w-[15px] h-[16px]"
                    type="checkbox"
                    name={`manufacturer_${manufacturer.original_manufacturer_name}`}
                    id={`manufacturer_${manufacturer.id}`}
                    checked={manufacturer.id === manufacturerId}
                    onChange={() =>
                      handleManufacturerCheckboxChange(manufacturer.id)
                    }
                  />
                  <span className="font-semibold font-lato text-[14px] leading-4 text-[#545454]">
                    {manufacturer.name}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoilerFilterManufacturer;
