import React from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Image from "next/image";
import { rubik400, rubik500 } from "../../assets/fonts";
import CheckItem from "./CheckItem";
import Button from "./Button";
import PriceCard from "./PriceCard";

const Pricing = () => {
  const pricingData = [
    {
      id: 1,
      planName: "Free Plan",
      planFeatures: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      planPrice: "Free",
    },
    {
      id: 2,
      planName: "Standard Plan",
      planFeatures: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
      ],
      planPrice: "$9",
    },
    {
      id: 3,
      planName: "Premium Plan",
      planFeatures: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
        "Get New Features",
      ],
      planPrice: "$12",
    },
  ];
  return (
    <div
      id="Pricing"
      className="flex flex-col items-center justify-center my-20"
    >
      <Heading text={"Choose Your Plan"} />
      <Subheading
        text={
          "Let's choose the package that is best for you and explore it happily and cheerfully."
        }
      />
      <div className="flex items-center justify-center">
        {pricingData.map((item) => (
          <PriceCard item={item} />
        ))}
      </div>
      <div>
        <Heading text="Huge Global Network of Fast VPN" />
        <Subheading text="See LaslesVPN everywhere to make it easier for you when you move locations." />
        <Image src="/Huge Global.svg" width={1000} height={500} alt="" />
        <Image src="/Sponsored.svg" width={1000} height={200} alt="" />
      </div>
    </div>
  );
};

export default Pricing;
