"use client";

import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import BoilerViewCard from "./BoilerViewCard";
import Pagination from "@mui/material/Pagination";
import { boilerCardsData } from "@/constants/data";
import { useState } from "react";

const BoilerFilterView = () => {
  const [boilerData, setBoilerData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [token, setToken] = useState(null);
  const itemsPerPage = 10;
  const [selectedOption, setSelectedOption] = useState(true);
  const typeOptions = ["True", "False"];
  const ManufecturerOptions = ["True", "False"];

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="flex flex-col gap-4 max-w-[775px] h-[1012px] ">
      {/* top bar */}
      <div className=" max-w-[775px] h-[45px] flex gap-3">
        <div className="flex gap-3 h-[45px]">
          <div className="relative">
            <input
              type="text"
              placeholder="Boiler Name, Model"
              className="placeholder:font-lato placeholder:font-semibold 
               placeholder:text-[14px] placeholder:leading-4 placeholder:text-[#A7A7A7] text-[#A7A7A7]
               border border-[#D9D9D9] pt-[6px] pr-[116px] pb-[6px] pl-[36px] rounded-[3px] focus:outline-none  w-[280.61px] h-[45.25px]"
            />
            <div className="absolute inset-y-0 left- pl-1 flex items-center pointer-events-none ">
              <CiSearch className="h-6 w-6 md:h-6 md:w-7  text-[#545454] absolute  cursor-pointer" />
            </div>
          </div>
          <div className="z-50 w-[101.82px]">
            <select
              className="border rounded pt-[11px] pr-[13px] pl-[11px] pb-[13px] w-[101.82px] text-[#A7A7A7]"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              {typeOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="z-50 w-[146.64px]">
            <select
              className="border rounded pt-[11px] pr-[13px] pl-[11px] pb-[13px] w-[146.64px] text-[#A7A7A7]"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              {ManufecturerOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="ml-auto">
          <Link href="/BoilerFilterSummeryView">
            <button className="text-[12px] leading-3 flex items-center justify-center ml-auto w-[189px] h-[45px] bg-[#009F78] text-[#FFFFFF] pt-[11px] pr-[41px] pb-[11px] pl-[41px] rounded-[5px] transition-all ease-in duration-300 hover:bg-[#00745E]">
              Compare
            </button>
          </Link>
        </div>
      </div>
      {/* body */}
      <div className="max-w-[775px] h-[841px] flex flex-col gap-3 overflow-y-scroll overflow-x-hidden cursor-pointer ">
        {loading ? (
          <p>Loading...</p>
        ) : (
          boilerCardsData?.map((boiler, index) => (
            <BoilerViewCard
              key={index}
              model={boiler.model}
              type={boiler.type.text}
              fuel={boiler.fuel}
              efficency={boiler.s_a_p_winter_seasonal_efficiency}
            />
          ))
        )}
      </div>
      {/* bottom */}
      <div className="w-[354px] self-center mt-10">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BoilerFilterView;
