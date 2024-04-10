import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Section from "@/components/Section";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Section />
      <Footer />
    </>
  );
}
