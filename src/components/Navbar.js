import React from "react";
import Image from "next/image";
import Button from "./Button";
import { rubik400, rubik500, rubik700 } from "../../assets/fonts";
import Link from "next/link";

const Navbar = () => {
  const navLinks = ["About", "Features", "Pricing", "Testimonials", "Help"];
  return (
    <div className="flex items-center justify-between mt-10">
      <div className="flex items-center justify-between">
        <Image src="/Vector.svg" width={30} height={30} alt="logo" />
        <p className={`${rubik500.className} text-xl text-[#0B132A] ml-3`}>
          Lasles<span className={rubik700.className}>VPN</span>
        </p>
      </div>

      <ul className="flex items-center justify-between w-[40%]">
        {navLinks.map((item, index) => (
          <li className={`${rubik400.className} text-[#4F5665]`} key={index}>
            <Link href="#about">{item}</Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between w-52">
        <p className={rubik500.className}>Sign In</p>
        {/* Sign Up button */}
        <Button type="primary" title="Sign up" />
      </div>
    </div>
  );
};

export default Navbar;
