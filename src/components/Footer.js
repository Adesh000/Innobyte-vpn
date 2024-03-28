import React from "react";
import { rubik400, rubik500, rubik700 } from "../../assets/fonts";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { COLUMNS } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-bgGrey lg:flexBetween p-20 pt-44 px-32">
      <div className="lg:w-[30%] my-5">
        <div className="flex items-center justify-start">
          <Image src="/Vector.svg" width={30} height={30} alt="logo" />
          <p className={`${rubik500.className} text-xl text-textBlack ml-3`}>
            Lasles<span className={rubik700.className}>VPN</span>
          </p>
        </div>
        <p className={`${rubik400.className} text-textGrey text-base my-5`}>
          <span className={`${rubik500.className}`}>LaslesVPN </span> is a
          private virtual network that has unique features and has high
          security.
        </p>
        <div className="flex items-center justify-start mb-5">
          <div className="bg-white w-10 h-10 rounded-full flexCenter shadow-xl mr-3">
            <FaFacebookF color={"F53838"} />
          </div>
          <div className="bg-white w-10 h-10 rounded-full flexCenter shadow-xl mr-3">
            <FaTwitter color={"#F53838"} />
          </div>
          <div className="bg-white w-10 h-10 rounded-full flexCenter shadow-xl mr-3">
            <ImInstagram color={"#F53838"} />
          </div>
        </div>
        <p className={`${rubik400.className} text-base text-[#AFB5C0]`}>
          ©2020Lasles<span className={rubik500.className}>VPN</span>
        </p>
      </div>
      <div className="flexBStart lg:w-[50%] mt-10">
        {COLUMNS.map((item, index) => (
          <div key={index}>
            <p className={`${rubik500.className} text-lg text-textBlack mb-5`}>
              {item.title}
            </p>
            {item.links.map((link, i) => (
              <Link href="/">
                <p
                  key={i}
                  className={`${rubik400.className} text-textGrey text-base mb-3`}
                >
                  {link}
                </p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
