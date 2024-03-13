import React from "react";
import { rubik500 } from "../../assets/fonts";

const Button = ({ type, title }) => {
  return (
    <button
      className={`px-9 py-2 ${rubik500.className} ${
        type === "primary"
          ? `rounded-full border-[#F53855] border text-[#F53855]`
          : `rounded-md bg-[#F53855] drop-shadow-2xl shadow-2xl text-white`
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
