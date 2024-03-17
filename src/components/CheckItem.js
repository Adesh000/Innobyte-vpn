import React from "react";
import { rubik400 } from "../../assets/fonts";
import Image from "next/image";

const CheckItem = ({ title, index }) => {
  return (
    <div className="flex items-center justify-start my-5" key={index}>
      <Image src="/Group 1120.svg" width={25} height={25} alt="" />
      <p className={`${rubik400.className} text-base text-[#4F5665] ml-3`}>
        {title}
      </p>
    </div>
  );
};

export default CheckItem;
