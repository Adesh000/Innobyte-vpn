import React from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import { rubik400, rubik500 } from "../../assets/fonts";
import Image from "next/image";

const Users = [
  {
    imageUri: "/Ellipse 175.svg",
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    review:
      "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
  },
  {
    imageUri: "/Ellipse 175 (1).svg",
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "4.6",
    review:
      "“I like it because I like to travel far and still can connect with high speed.”.",
  },
  {
    imageUri: "/Ellipse 175 (2).svg",
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: "5.0",
    review:
      "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
  },
  // {
  //   imageUri: "/Ellipse 175.svg",
  //   name: "Viezh Robert",
  //   location: "Warsaw, Poland",
  //   rating: "4.5",
  //   review:
  //     "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
  // },
];

const Testimonials = () => {
  return (
    <div className="my-20">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[40%] text-center">
          <Heading text="Trusted by Thousands of Happy Customer" />
          <Subheading text="These are the stories of our customers who have joined us with great pleasure when using this crazy feature." />
        </div>
      </div>
      <div className="flex items-center justify-between my-10 mt-20">
        {Users.map((user, i) => (
          <div
            className="w-96 hover:border-[#F53855] border-2 rounded-lg p-5 min-h-52"
            key={i}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between">
                <Image src={user?.imageUri} width={50} height={50} alt="" />
                <div className="ml-3">
                  <p className={`${rubik500.className} text-lg text-[#0B132A]`}>
                    {user?.name}
                  </p>
                  <p className={`${rubik400.className} text-sm text-[#4F5665]`}>
                    {user?.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p
                  className={`${rubik400.className} text-[#0B132A] text-base mr-3`}
                >
                  {user?.rating}
                </p>
                <Image
                  src="/ant-design_star-filled.svg"
                  width={16}
                  height={16}
                />
              </div>
            </div>
            <p
              className={`${rubik400.className} text-base text-[#0B132A] mt-5`}
            >
              {user?.review}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
          <div className="w-4 h-4 rounded-full bg-[#DDE0E4] mr-3" />
          <div className="w-4 h-4 rounded-full bg-[#DDE0E4] mr-3" />
          <div className="w-4 h-4 rounded-full bg-[#DDE0E4] mr-3" />
          <div className="w-4 h-4 rounded-full bg-[#DDE0E4] mr-3" />
        </div>
        <div className="flex items-center justify-between w-28">
          <div className="w-12 h-12 rounded-full bg-white border-[#F53855] border-2 flex items-center justify-center">
            <Image
              src="/eva_arrow-back-fill1.svg"
              width={20}
              height={20}
              alt=""
            />
          </div>
          <div className="w-12 h-12 rounded-full bg-[#F53855] border-[#F53855] border-2 flex items-center justify-center">
            <Image
              src="/eva_arrow-back-fill.svg"
              width={20}
              height={20}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
