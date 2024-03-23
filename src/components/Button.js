import React from "react";
import { rubik500, rubik700 } from "../../assets/fonts";

const Button = ({ type, title }) => {
  return (
    <button
      className={`px-10 py-2 text-base ${rubik700.className} ${
        type === "primary"
          ? `rounded-full border-[#F53855] border-2 text-[#F53855]`
          : `rounded-md bg-[#F53855] drop-shadow-2xl shadow-2xl text-white`
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
