import About from "@/components/About";
import Button from "@/components/Button";
import Features from "@/components/Features";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Subheading from "@/components/Subheading";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <About />
      <Features />
      <Pricing />
      <Testimonials />
      <div className="shadow-2xl bg-white flexBetween p-10 rounded-xl lg:px-24 relative top-28">
        <div className="w-1/2">
          <Heading text={"Subscribe Now for Get Special Features!"} />
          <Subheading text={`Let's subscribe with us and find the fun.`} />
        </div>
        <Button type={""} title={"Subscribe Now"} />
      </div>
    </>
  );
}
