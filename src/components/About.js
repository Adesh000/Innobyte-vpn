import Image from "next/image";
import React from "react";
import Button from "./Button";
import { rubik400, rubik500, rubik700 } from "../../assets/fonts";

const About = () => {
  const stats = [
    {
      icon: <Image src="/Group 1216.svg" width={25} height={25} alt="" />,
      count: "90+",
      name: "Users",
    },
    {
      icon: (
        <Image src="/gridicons_location.svg" width={25} height={25} alt="" />
      ),
      count: "30+",
      name: "Locations",
    },
    {
      icon: <Image src="/bx_bxs-server.svg" width={25} height={25} alt="" />,
      count: "50+",
      name: "Servers",
    },
  ];
  return (
    <>
      <div id="about" className="flex items-center justify-between my-24">
        <div className="w-[50%]">
          <p className={`${rubik500.className} text-6xl text-[#B132A]`}>
            Want anything to be easy with{" "}
            <span className={rubik700.className}>LaslesVPN.</span>
          </p>
          <p className={`${rubik400.className} my-10 text-[#4F5665] text-lg`}>
            Provide a network for all your needs with ease and fun using{" "}
            <span className={rubik500.className}>LaslesVPN </span>
            discover interesting features from us.
          </p>
          <Button title="Get Started" />
        </div>
        <Image src="/Illustration 1.svg" width={650} height={400} alt="" />
      </div>

      {/* Stats Sections*/}
      <div className="shadow-2xl bg-white flex items-center justify-between p-10 rounded-xl px-24">
        {stats.map((item, index) => (
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
            {index !== stats.length - 1 && (
              <div className="w-1 h-32 bg-[#EEEFF2]"></div>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default About;
