import BoilerHero from "@/components/boiler/BoilerHero";
import BoilerFilter from "./BoilerFilter/page";
import GetInTouchSection from "../GetInTouchSection/page";
// import BlogSection from "@/app/BlogSection/page";
// import NewsSection from "@/app/NewsSection/page";
// import GetInTouchSection from "@/app/GetInTouncSection/page";
// import ManufacturerSection from "@/app/ManufacturerSection/page";
// import CTASection from "@/app/CTASection/page";

const Boiler = () => {
  return (
    <div>
      <BoilerHero />
      <BoilerFilter/>
      <GetInTouchSection/>
    </div>
  );
};

export default Boiler;
