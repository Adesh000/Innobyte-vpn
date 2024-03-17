import React from "react";
import { rubik500 } from "../../assets/fonts";

const Heading = ({ text }) => {
  return (
    <p className={`${rubik500.className} text-4xl text-[#0B132A]`}>{text}</p>
  );
};

export default Heading;
