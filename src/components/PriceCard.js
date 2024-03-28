import Image from "next/image";
import React from "react";
import { rubik400, rubik500 } from "../../assets/fonts";
import CheckItem from "./CheckItem";
import Button from "./Button";

const PriceCard = ({ item }) => {
  return (
    <div
      className="border-2 border-gray-300 rounded-xl p-10 my-3 colBetween h-[750px] px-16 hover:border-bgRed"
      key={item?.id}
    >
      <div className="colCenter">
        <Image src="/Free.svg" width={150} height={165} alt="" />
        <p className={`${rubik500.className} text-lg text-textBlack my-5`}>
          {item?.planName}
        </p>
        <div className="flex flex-col items-start justify-center">
          {item?.planFeatures.map((elem, index) => (
            <CheckItem type="pricing" title={elem} index={index} />
          ))}
        </div>
      </div>
      <div className="colCenter">
        <p className={`${rubik500.className} text-2xl text-textBlack mb-3`}>
          {item?.planPrice}{" "}
          <span className={`${rubik400.className} text-textGrey`}>
            {item?.planPrice !== "Free" && "/ mo"}
          </span>
        </p>
        <Button
          type={"primary"}
          title="Select"
          hoverStyles={`hover:bg-[#F53855] hover:text-white hover:drop-shadow-[0_15px_15px_rgba(245,56,56,0.5)]`}
        />
      </div>
    </div>
  );
};

export default PriceCard;
