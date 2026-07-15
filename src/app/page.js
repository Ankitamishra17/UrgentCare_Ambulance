
import HeroSection from "@/components/home/HeroSection";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Contact from "@/components/home/Contact";
import WhyChooseUs from "@/components/home/WhyChoose";
import Testimonial from "@/components/home/Testimonial";




export default function Home() {
  return (
    <>
      
      <HeroSection />
      <About />
      <Services />
      <WhyChooseUs/>
     
      <Contact />
      <Testimonial/>
     
      
    </>
  );
}