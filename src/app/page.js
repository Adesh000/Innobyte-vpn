import About from "@/components/About";
import Features from "@/components/Features";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <About />
      <Features />
      <Pricing />
      <Testimonials />
    </>
  );
}
