import React from "react";
import { rubik500, rubik700 } from "../../assets/fonts";

const Button = ({ type, title }) => {
  return (
    <button
      className={`px-10 py-2 text-base ${rubik700.className} ${
        type === "primary"
          ? `rounded-full border-bgRed border-2 text-bgRed hover:bg-bgRed hover:text-white hover:drop-shadow-[0_15px_15px_rgba(245,56,56,0.5)]`
          : `rounded-md bg-bgRed drop-shadow-[0_20px_20px_rgba(245,56,56,0.5)] text-white py-4 px-16`
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
