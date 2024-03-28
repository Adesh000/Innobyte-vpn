import React from "react";
import { rubik400 } from "../../assets/fonts";
import Image from "next/image";

const CheckItem = ({ title, type }) => {
  return (
    <div className="flex items-center justify-start my-3">
      {type === "pricing" ? (
        <Image src="/Group 1226.svg" width={25} height={25} alt="" />
      ) : (
        <Image src="/Group 1120.svg" width={25} height={25} alt="" />
      )}
      <p className={`${rubik400.className} text-base text-textGrey ml-3`}>
        {title}
      </p>
    </div>
  );
};

export default CheckItem;
