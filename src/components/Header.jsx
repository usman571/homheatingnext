"use client";
import { useState } from "react";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "Central Heating", hrefValue: "/CentralHeating" },
    { id: 2, link: "Grants & Schemes", hrefValue: "/Grants&Schemes" },
    { id: 3, link: "Energy Efficiency", hrefValue: "/EnergyEfficiency" },
    { id: 4, link: "UK Energy News", hrefValue: "/UKEnergyNews" },
  ];

  return (
    <nav className="h-[59px] p-4 flex items-center">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo  */}
        <div>
          <Link href="/">
            <p className="text-[#2E3538] text-[20px] font-semibold relative font-Poppins cursor-pointer">
              Home Heating
              <span className="absolute font-medium text-sm ml-1 text-[#7E7E7E] font-Poppins">
                Guide
              </span>
            </p>
          </Link>
        </div>

        {/* List Items */}
        <div className="hidden lg:flex ml-auto items-center space-x-4">
          <ul className="flex text-sm font-normal space-x-4 mr-24 text-[#545454]">
            {links.map(({ id, link, hrefValue }) => (
              <li
                key={id}
                className="flex items-center transition hover:text-[#009F78]"
              >
                <Link href={hrefValue}>{link}</Link>
                <MdKeyboardArrowDown
                  className="text-[20px] mt-1"
                  color="#7E7E7E"
                />
              </li>
            ))}
          </ul>

          {/* Button */}
          <button className="text-white text-sm bg-[#009F78] px-4 py-2 rounded-md hover:bg-[#00745E]">
            Free Boiler Quote
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden cursor-pointer">
          {nav ? (
            <FaTimes size={30} onClick={() => setNav(!nav)} />
          ) : (
            <FaBars size={30} onClick={() => setNav(!nav)} />
          )}
        </div>
        {nav && (
          <ul className="z-50  lg:hidden absolute top-[59px] left-0 w-full bg-gray-200 text-[#545454] text-center">
            {links.map(({ id, link, hrefValue }) => (
              <li key={id} className="py-3 transition hover:text-[#009F78]">
                <Link
                  href={hrefValue}
                  onClick={() => setNav(!nav)}
                  className="cursor-pointer"
                >
                  {link}
                </Link>
              </li>
            ))}
            <button className="text-white text-sm bg-[#009F78] px-4 py-2 rounded-md transition-all ease-in duration-300 hover:bg-[#00745E]">
              Free Boiler Quote
            </button>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Header;
