import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Section from "@/components/Section";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import Hero2 from "@/components/Hero2";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Swiper from "@/components/common/Swiper";

export default function page() {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <Hero />
      <Hero2 />
      <Services />
      <About />
      <Section />
      <Swiper />
      <Footer />
    </div>
  );
}
