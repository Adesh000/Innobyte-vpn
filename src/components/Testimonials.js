"use client";
import React from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import { rubik400, rubik500 } from "../../assets/fonts";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import { USER_PROFILES } from "@/constants";

const Testimonials = () => {
  const prevSlide = () => {
    let box = document.querySelector(".carousel-container");
    let width = box.clientWidth;
    console.log(width);
    box.scrollLeft = box.scrollLeft - width;
  };

  const nextSlide = () => {
    let box = document.querySelector(".carousel-container");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
  };

  return (
    <section className="mt-20" id="Testimonials">
      <div className="colCenter">
        <div className="lg:w-[40%] text-center">
          <Heading text="Trusted by Thousands of Happy Customer" />
          <Subheading text="These are the stories of our customers who have joined us with great pleasure when using this crazy feature." />
        </div>
      </div>
      <div className="carousel-container flexBetween my-10 mt-20 overflow-hidden">
        {USER_PROFILES.map((user, i) => (
          <div key={i}>
            <ProfileCard user={user} />
          </div>
        ))}
      </div>
      <div className="flexBetween">
        <div className="flexBetween">
          <div className="w-4 h-4 rounded-full bg-[#DDE0E4] mr-3" />
          <div className="w-4 h-4 rounded-full bg-[#DDE0E4] mr-3" />
          <div className="w-4 h-4 rounded-full bg-[#DDE0E4] mr-3" />
          <div className="w-4 h-4 rounded-full bg-[#DDE0E4] mr-3" />
        </div>
        <div className="flexBetween w-28">
          <button
            className="w-12 h-12 rounded-full bg-white border-bgRed border-2 flexCenter"
            onClick={prevSlide}
          >
            <Image
              src="/eva_arrow-back-fill1.svg"
              width={20}
              height={20}
              alt=""
            />
          </button>
          <button
            className="w-12 h-12 rounded-full bg-bgRed border-bgRed border-2 flexCenter"
            onClick={nextSlide}
          >
            <Image
              src="/eva_arrow-back-fill.svg"
              width={20}
              height={20}
              alt=""
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
