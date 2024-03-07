"use client"

import backgroundImage from "../../../public/assets/background.png";

const BoilerHero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="h-[260px] md:h-[381px] flex justify-between overflow-hidden"
      style={backgroundImageStyle}
    >
      <div className=" max-w-[1280px] mx-auto text-[#FFFFFF] flex items-center justify-center">
        <div>
          <h1 className="font-extrabold md:text-[46px] text-[30px] leading-[27.2px] font-lato text-center mb-4">
            Boilers
          </h1>
          <p className="sm:max-w-[665px] mx-auto max-w-[365px] font-lato font-semibold md:text-[20px] text-[16px]  leading-5">
            Compare boiler efficiencies & find out if a new boiler could save
            you money
          </p>
        </div>
      </div>
    </div>
  );
};

export default BoilerHero;
