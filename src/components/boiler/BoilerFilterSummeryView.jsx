"use client";

import { MdKeyboardArrowRight } from "react-icons/md";

const BoilerFilterSummeryView = () => {
  return (
    <div className="flex flex-col gap-4 w-[825px] h-[885px]">
      {/* top bar */}
      <div className="flex justify-between">
        {/* top left */}
        <div className="w-[302px] h-[57px] flex flex-col gap-2">
          <h1 className="font-bold text-[26px] leading-7 text-[#545454]">
            ARCA Pixel 25 FC Boiler
          </h1>
          <p className="font-normal text-[16px] leading-[18px] text-[#7E7E7E]">
            Efficiency Rating
          </p>
        </div>
        {/* top right */}
        <div className=" w-[172px] h-[57px] flex flex-col items-end gap-2">
          <h2 className="font-bold text-[26px] leading-7 text-[#00BF8F]">
            89.1%
          </h2>
          <p className="font-normal text-[16px] leading-[18px] text-[#545454]">
            SAP seasonal efficiency
          </p>
        </div>
      </div>
      {/* body */}
      <div className="w-[825px] h-[329px] rounded shadow p-6 relative space-y-6 border border-[#D9D9D9]">
        <div className="w-[752px] space-y-3">
          <h1 className="font-bold text-[16px] leading-[18px] text-[#545454]">
            Summary
          </h1>
          <p className="font-normal text-[14px] leading-[20px] text-[#545454]">
            The ARCS Pixel 25 FC has a SAP seasonal efficiency rating of 89.1%
            <br />
            The Pixel 25 FC is a Condensing Combi boiler with a maximum power
            output of 24.4kw that uses Gas as its fuel sources. This boiler will
            provide efficient heating and subsequently reduce fuel bills and
            carbon dioxide emissions.
          </p>
          <img
            src="/assets/arca.png"
            alt=""
            className="absolute right-10 top-1"
          />
        </div>
        {/* Specifications */}
        <div className="space-y-3">
          <h1 className="font-bold text-[16px] leading-[18px] text-[#545454]">
            Specifications
          </h1>
          <div className="">
            <div className="w-[663px] h-[58.18px] rounded-[3px] flex items-center justify-between ">
              <div className="space-y-2 min-w-[165.75px]">
                <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                  Model
                </p>
                <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
                  ARCA Pixel 25 FC
                </p>
              </div>
              <div className="space-y-2 min-w-[165.75px]">
                <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                  Type
                </p>
                <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
                  Condensing
                </p>
              </div>
              <div className="space-y-2 min-w-[165.75px]">
                <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                  Fuel
                </p>
                <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
                  Gas
                </p>
              </div>
              <div className="space-y-2 min-w-[165.75px]">
                <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                  Efficiency
                </p>
                <button className="rounded-[5px] w-[67px] h-[26px] flex items-center justify-center bg-[#009F7830] text-[13px] font-bold leading-[15px] ">
                  89.1%
                </button>
              </div>
            </div>
            <div className="w-[663px] h-[58.18px] rounded-[3px] flex items-center justify-between ">
              <div className="space-y-2 min-w-[165.75px]">
                <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                  Method
                </p>
                <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
                  Condensing
                </p>
              </div>
              <div className="space-y-2 min-w-[165.75px]">
                <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                  Flue Type
                </p>
                <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
                  Room-Sealed
                </p>
              </div>
              <div className="space-y-2 min-w-[165.75px]">
                <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                  Fan
                </p>
                <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
                  Fan Assisted
                </p>
              </div>
              <div className="space-y-2 min-w-[165.75px]">
                <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                  Output (KW)
                </p>
                <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
                  24.4 - 24.4
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* middle content */}
      <hr className="text-[#00000033] h-[2px] w-[523px] mx-auto  my-5"></hr>
      <div className="flex justify-between mx-8">
        <div className="w-[211px] h-[48px] flex flex-col gap-2">
          <h1 className="font-bold text-[16px] leading-[18px] text-[#545454]">
            Similar Boilers to the ARCA
          </h1>
          <p className="font-normal text-[14px] leading-[18px] text-[#7E7E7E]">
            Condensing Gas Combi
          </p>
        </div>
        <div className="w-[350px] h-[48px] flex flex-col gap-2 ml-auto">
          <h1 className="font-bold text-[16px] leading-[18px] text-[#545454]">
            Most Efficient Condensing Gas Combi Boilers
          </h1>
          <p className="font-normal text-[14px] leading-[18px] text-[#7E7E7E]">
            Condensing Gas Combi
          </p>
        </div>
      </div>
      {/* bottom content*/}
      <div className="flex justify-between">
        <div className="space-y-3">
          <div className="w-[380px] h-[76px] rounded-[3px]  border border-[#D9D9D9] flex items-center justify-between px-6 py-2 z-0 shadow ">
            <div className="space-y-2">
              <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                Model
              </p>
              <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
                ARCA Pixel 25 FC
              </p>
            </div>
            <div className="space-y-2 flex gap-4">
              <div className="space-y-2">
                <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                  Efficiency
                </p>
                <button className="rounded-[5px] w-[67px] h-[26px] flex items-center justify-center bg-[#009F7830] text-[13px] font-bold leading-[15px] ">
                  89.1%
                </button>
              </div>
              <div className="space-y-2">
                <MdKeyboardArrowRight className="cursor-pointer text-[#7E7E7E] text-[40px]" />
              </div>
            </div>
          </div>
          <div className="w-[380px] h-[76px] rounded-[3px]  border border-[#D9D9D9] flex items-center justify-between px-6 py-2 z-0 shadow">
            <div className="space-y-2">
              <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                Model
              </p>
              <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
                ARCA Pixel 25 FC
              </p>
            </div>
            <div className="space-y-2 flex gap-4">
              <div className="space-y-2">
                <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                  Efficiency
                </p>
                <button className="rounded-[5px] w-[67px] h-[26px] flex items-center justify-center bg-[#009F7830] text-[13px] font-bold leading-[15px] ">
                  89.1%
                </button>
              </div>
              <div className="space-y-2">
                <MdKeyboardArrowRight className="cursor-pointer text-[#7E7E7E] text-[40px]" />
              </div>
            </div>
          </div>
          <div className="w-[380px] h-[76px] rounded-[3px]  border border-[#D9D9D9] flex items-center justify-between px-6 py-2 z-0 shadow">
            <div className="space-y-2">
              <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                Model
              </p>
              <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
                ARCA Pixel 25 FC
              </p>
            </div>
            <div className="space-y-2 flex gap-4">
              <div className="space-y-2">
                <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                  Efficiency
                </p>
                <button className="rounded-[5px] w-[67px] h-[26px] flex items-center justify-center bg-[#009F7830] text-[13px] font-bold leading-[15px] ">
                  89.1%
                </button>
              </div>
              <div className="space-y-2">
                <MdKeyboardArrowRight className="cursor-pointer text-[#7E7E7E] text-[40px]" />
              </div>
            </div>
          </div>
          <div className="w-[380px] h-[76px] rounded-[3px]  border border-[#D9D9D9] flex items-center justify-between px-6 py-2 z-0 shadow">
            <div className="space-y-2">
              <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                Model
              </p>
              <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
                ARCA Pixel 25 FC
              </p>
            </div>
            <div className="space-y-2 flex gap-4">
              <div className="space-y-2">
                <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                  Efficiency
                </p>
                <button className="rounded-[5px] w-[67px] h-[26px] flex items-center justify-center bg-[#009F7830] text-[13px] font-bold leading-[15px] ">
                  89.1%
                </button>
              </div>
              <div className="space-y-2">
                <MdKeyboardArrowRight className="cursor-pointer text-[#7E7E7E] text-[40px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="w-[380px] h-[76px] rounded-[3px]  border border-[#D9D9D9] flex items-center justify-between px-6 py-2 z-0 shadow ">
            <div className="space-y-2">
              <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                Model
              </p>
              <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
                ARCA Pixel 25 FC
              </p>
            </div>
            <div className="space-y-2 flex gap-4">
              <div className="space-y-2">
                <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                  Efficiency
                </p>
                <button className="rounded-[5px] w-[67px] h-[26px] flex items-center justify-center bg-[#009F7830] text-[13px] font-bold leading-[15px] ">
                  89.1%
                </button>
              </div>
              <div className="space-y-2">
                <MdKeyboardArrowRight className="cursor-pointer text-[#7E7E7E] text-[40px]" />
              </div>
            </div>
          </div>
          <div className="w-[380px] h-[76px] rounded-[3px]  border border-[#D9D9D9] flex items-center justify-between px-6 py-2 z-0 shadow">
            <div className="space-y-2">
              <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                Model
              </p>
              <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
                ARCA Pixel 25 FC
              </p>
            </div>
            <div className="space-y-2 flex gap-4">
              <div className="space-y-2">
                <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                  Efficiency
                </p>
                <button className="rounded-[5px] w-[67px] h-[26px] flex items-center justify-center bg-[#009F7830] text-[13px] font-bold leading-[15px] ">
                  89.1%
                </button>
              </div>
              <div className="space-y-2">
                <MdKeyboardArrowRight className="cursor-pointer text-[#7E7E7E] text-[40px]" />
              </div>
            </div>
          </div>
          <div className="w-[380px] h-[76px] rounded-[3px]  border border-[#D9D9D9] flex items-center justify-between px-6 py-2 z-0 shadow">
            <div className="space-y-2">
              <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                Model
              </p>
              <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
                ARCA Pixel 25 FC
              </p>
            </div>
            <div className="space-y-2 flex gap-4">
              <div className="space-y-2">
                <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                  Efficiency
                </p>
                <button className="rounded-[5px] w-[67px] h-[26px] flex items-center justify-center bg-[#009F7830] text-[13px] font-bold leading-[15px] ">
                  89.1%
                </button>
              </div>
              <div className="space-y-2">
                <MdKeyboardArrowRight className="cursor-pointer text-[#7E7E7E] text-[40px]" />
              </div>
            </div>
          </div>
          <div className="w-[380px] h-[76px] rounded-[3px]  border border-[#D9D9D9] flex items-center justify-between px-6 py-2 z-0 shadow">
            <div className="space-y-2">
              <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                Model
              </p>
              <p className="font-lato font-bold text-[14px] leading-4 text-[#545454]">
                ARCA Pixel 25 FC
              </p>
            </div>
            <div className="space-y-2 flex gap-4">
              <div className="space-y-2">
                <p className="font-lato font-semibold text-[14px] leading-4 text-[#A7A7A7]">
                  Efficiency
                </p>
                <button className="rounded-[5px] w-[67px] h-[26px] flex items-center justify-center bg-[#009F7830] text-[13px] font-bold leading-[15px] ">
                  89.1%
                </button>
              </div>
              <div className="space-y-2">
                <MdKeyboardArrowRight className="cursor-pointer text-[#7E7E7E] text-[40px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoilerFilterSummeryView;
