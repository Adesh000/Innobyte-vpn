import React from "react";
import { rubik400 } from "../../assets/fonts";

const Subheading = ({text}) => {
  return (
    <p className={`${rubik400.className} text-lg text-[#4F5665] my-5`}>
      {text}
    </p>
  );
};

export default Subheading;
