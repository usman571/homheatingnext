"use client";
import React, { useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
// import {
//   Menu,
//   MenuHandler,
//   MenuItem,
//   MenuList,
// } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
// import ComboBox from "../../components/mui/manuefacturerDropDown";
import CustomDivider from "@/components/CustomDivider";
import Link from "next/link";
import backgroundImage from "../../public/assets/Background.png";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  useEffect(() => {
    AOS.init(); // Initialize AOS on component mount
  }, []);
  return (
    <div className="bg-[#00BF8F]">
      <div
        className="md:h-[510px] h-[400px]  flex justify-between  overflow-hidden max-w-[1280px] mx-auto"
        style={backgroundImageStyle}
      >
        <div
          className="max-h-[169px] md:pt-[164px] pt-[120px] md:pl-[99px] pl-[16px] md:max-h-[169px]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="font-bold font-lato md:text-[28.33px] text-[20.33px] text-white">
            Boiler Efficiency Ratings
          </h1>
          <p className="font-semibold font-lato md:text-[16px] text-[14px] text-white mb-5 w-[330px] md:w-[530px]">
            Compare boiler efficiencies & find out if a new boiler could save
            you money
          </p>
          <div className="h-[53px] w-[360px] md:w-[567px] bg-white flex items-center rounded-md">
            <div className="w-[360px] md:w-[567px] h-[24px] flex justify-start items-center  ml-2">
              <div className="flex items-center md:pl-2 w-[68px] md:w-[141.75px] relative">
                <input
                  type="text"
                  placeholder="Boiler Name"
                  className="h-8 md:px-2 pl-2  w-full md:ml-6 ml-3  border-none outline-none rounded-md md:text-xs text-[10px]  placeholder:text-[#545454]"
                />
                <IoSearch className="h-5 w-5 md:h-7 md:w-7  text-[#545454] absolute  cursor-pointer" />
              </div>

              <CustomDivider />

              <div className="w-[69px] md:w-[141.75px]">
                {/* <Menu>
                  <MenuHandler>
                    <span className="text-xs text-[#545454]  flex items-center cursor-pointer">
                      <MdKeyboardArrowDown className="h-5 w-5 text-[#545454]" />
                      Type
                    </span>
                  </MenuHandler>
                  <MenuList className="w-36">
                    <MenuItem>Yes</MenuItem>
                    <MenuItem>No</MenuItem>
                  </MenuList>
                </Menu> */}
              </div>

              <CustomDivider />

              <div className="w-[68px] md:w-[141.75px]">
                {/* <ComboBox /> */}
              </div>
            </div>
            <Link
              href="/boiler"
              className="text-white pt-4 font-semibold h-full  text-sm px-4 bg-[#00BF8F] rounded-r-md ml-auto ring-1 ring-[#009F78] transition-all ease-in duration-300 hover:bg-[#00745E]"
            >
              Compare
            </Link>
          </div>

          <p className="font-medium text-xs text-white mt-4 font-lato">
            Keywords: Cmobi, Condensing, Gas, Efficiency 85%
          </p>
        </div>

        <div className="">
          <img
            className="hidden lg:block w-[252px] h-[457px] object-cover mr-10  mt-[4rem]"
            src="/assets/1.png"
            data-aos="fade-left"
            data-aos-duration="2000"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
