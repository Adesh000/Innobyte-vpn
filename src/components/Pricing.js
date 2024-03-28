import React from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Image from "next/image";
import PriceCard from "./PriceCard";
import { PRICING_DATA } from "@/constants";

const Pricing = () => {
  return (
    <div id="Pricing" className="colCenter my-20">
      <div className="colCenter lg:w-1/2 text-center">
        <Heading text={"Choose Your Plan"} />
        <Subheading
          text={
            "Let's choose the package that is best for you and explore it happily and cheerfully."
          }
        />
      </div>
      <div className="colBetween lg:flex-row w-[85%] mt-10">
        {PRICING_DATA.map((item, index) => (
          <div key={index}>
            <PriceCard item={item} />
          </div>
        ))}
      </div>
      <div className="mt-20">
        <div className="colCenter mb-10">
          <div className="lg:w-[45%] text-center">
            <Heading text="Huge Global Network of Fast VPN" />
            <Subheading text="See LaslesVPN everywhere to make it easier for you when you move locations." />
          </div>
        </div>
        <Image src="/Huge Global.svg" width={1200} height={500} alt="" />
        <Image src="/Sponsored.svg" width={1200} height={200} alt="" />
      </div>
    </div>
  );
};

export default Pricing;
