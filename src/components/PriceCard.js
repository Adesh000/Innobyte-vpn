import Image from "next/image";
import React from "react";
import { rubik500 } from "../../assets/fonts";
import CheckItem from "./CheckItem";
import Button from "./Button";

const PriceCard = ({ item }) => {
  return (
    <div
      className="border-2 border-gray-300 rounded-lg p-10 flex flex-col items-center justify-center"
      key={item?.id}
    >
      <Image src="/Free.svg" width={150} height={165} alt="" />
      <p className={`${rubik500.className} text-lg text-[#0B132A]`}>
        {item?.planName}
      </p>
      {item?.planFeatures.map((elem, index) => (
        <CheckItem type="pricing" title={elem} index={index} />
      ))}
      <p className={`${rubik500.className} text-2xl text-[#0B132A]`}>
        {item?.planPrice}
      </p>
      <Button type={"primary"} title="Select" />
    </div>
  );
};

export default PriceCard;
