import React from "react";
import { rubik500 } from "../../assets/fonts";

const Heading = ({ text }) => {
  return (
    <p className={`${rubik500.className} text-4xl text-textBlack`}>{text}</p>
  );
};

export default Heading;
