import React from "react";
import { rubik400 } from "../../assets/fonts";

const Subheading = ({ text }) => {
  return (
    <p className={`${rubik400.className} text-lg text-textGrey my-5`}>{text}</p>
  );
};

export default Subheading;
