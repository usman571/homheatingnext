import Hero from "@/components/home/Hero";
import BlogSection from "@/app/home/BlogSection/page";
import NewsSection from "@/app/home/NewsSection/page";
import GetInTouchSection from "@/app/GetInTouncSection/page";
import ManufacturerSection from "@/app/home/ManufacturerSection/page";
import CTASection from "@/app/home/CTASection/page";

const Home = () => {
  return (
    <div>
      <Hero />
      <BlogSection />
      <NewsSection />
      <GetInTouchSection />
      <ManufacturerSection />
      <CTASection />
    </div>
  );
};

export default Home;
