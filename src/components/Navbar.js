"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import { rubik400, rubik500, rubik700 } from "../../assets/fonts";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { TiThMenu } from "react-icons/ti";
const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="mt-10 px-20 lg:px-32 flexBetween">
      <div className="flexBetween">
        <Image src="/Vector.svg" width={30} height={30} alt="logo" />
        <p className={`${rubik500.className} text-xl text-textBlack ml-3`}>
          Lasles<span className={rubik700.className}>VPN</span>
        </p>
      </div>

      <ul className="w-[40%] hidden lg:flexBetween">
        {NAV_LINKS.map((item, index) => (
          <Link
            href={`#${item}`}
            className={`${rubik400.className} text-textGrey hover:text-textBlack`}
            key={index}
            onClick={() => scrollToSection(item)}
          >
            {item}
          </Link>
        ))}
      </ul>

      <div className="w-52 hidden lg:flexBetween">
        <p className={rubik500.className}>Sign In</p>
        {/* Sign Up button */}
        <Button type="primary" title="Sign up" />
      </div>

      <button className="lg:hidden">
        <TiThMenu />
      </button>
    </div>
  );
};

export default Navbar;
