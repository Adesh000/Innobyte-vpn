import Image from "next/image";
import React from "react";
import Button from "./Button";
import { rubik400, rubik500, rubik700 } from "../../assets/fonts";
import { STATS } from "@/constants";

const About = () => {
  return (
    <>
      <div id="About" className="lg:flexBetween my-24">
        <div className="lg:w-[50%] mb-20 lg:mb-0">
          <p className={`${rubik500.className} text-6xl text-textBlack`}>
            Want anything to be easy with{" "}
            <span className={rubik700.className}>LaslesVPN.</span>
          </p>
          <p className={`${rubik400.className} my-10 text-textGrey text-lg`}>
            Provide a network for all your needs with ease and fun using{" "}
            <span className={rubik500.className}>LaslesVPN </span>
            discover interesting features from us.
          </p>
          <Button title="Get Started" />
        </div>
        <Image src="/Illustration 1.svg" width={650} height={400} alt="" />
      </div>

      {/* Stats Sections*/}
      <div className="shadow-2xl bg-white flexBetween p-10 rounded-xl lg:px-24">
        {STATS.map((item, index) => (
          <>
            <div className="flex items-center justify-between" key={index}>
              <div className="bg-[#FFECEC] rounded-full flex items-center justify-center w-12 h-12">
                {item.icon}
              </div>
              <div className="ml-7">
                <p className={`${rubik700.className} text-2xl`}>{item.count}</p>
                <p className={`${rubik400.className} text-xl`}>{item.name}</p>
              </div>
            </div>
            {index !== STATS.length - 1 && (
              <div className="w-0.5 h-24 bg-[#EEEFF2]"></div>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default About;
