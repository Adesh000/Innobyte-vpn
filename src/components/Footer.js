import React from "react";
import { rubik400, rubik500, rubik700 } from "../../assets/fonts";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
const columns = [
  {
    title: "Product",
    links: ["Download", "Pricing", "Locations", "Server", "Countries", "Blog"],
  },
  {
    title: "Engage",
    links: [
      "LaslesVPN ?",
      "FAQ",
      "Tutorials",
      "About Us",
      "Privacy Policy",
      "Terms of service",
    ],
  },
  {
    title: "Earn Money",
    links: ["Affiliate", "Become Partner"],
  },
];
const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] flex items-start justify-between p-20">
      <div className="w-[30%]">
        <div className="flex items-center justify-start">
          <Image src="/Vector.svg" width={30} height={30} alt="logo" />
          <p className={`${rubik500.className} text-xl text-[#0B132A] ml-3`}>
            Lasles<span className={rubik700.className}>VPN</span>
          </p>
        </div>
        <p className={`${rubik400.className} text-[#4f5665] text-base my-5`}>
          <span className={`${rubik500.className}`}>LaslesVPN </span> is a
          private virtual network that has unique features and has high
          security.
        </p>
        <div className="flex items-center justify-start mb-5">
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-xl mr-3">
            <FaFacebookF color={"#F53855"} />
          </div>
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-xl mr-3">
            <FaTwitter color={"#F53855"} />
          </div>
          <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-xl mr-3">
            <ImInstagram color={"#F53855"} />
          </div>
        </div>
        <p className={`${rubik400.className} text-base text-[#AFB5C0]`}>
          ©2020Lasles<span className={rubik500.className}>VPN</span>
        </p>
      </div>
      <div className="flex items-start justify-between w-[50%]">
        {columns.map((item, index) => (
          <div key={index}>
            <p className={`${rubik500.className} text-lg text-[#0B132A] mb-5`}>
              {item.title}
            </p>
            {item.links.map((link, i) => (
              <Link href="/">
                <p
                  key={i}
                  className={`${rubik400.className} text-[#4F5665] text-base mb-3`}
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
