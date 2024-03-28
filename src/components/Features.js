import Image from "next/image";
import React from "react";
import { rubik400, rubik500 } from "../../assets/fonts";
import Heading from "./Heading";
import Subheading from "./Subheading";
import CheckItem from "./CheckItem";
import { FEATURES } from "@/constants";

const Features = () => {
  return (
    <section id="Features" className="lg:endEven py-32">
      <Image src="/Illustration 2.svg" width={500} height={400} alt="" />
      <div className="lg:w-[35%]">
        <Heading text="We Provide Many Features You Can Use" />
        <Subheading
          text="You can explore the features that we provide with fun and have their own
      functions each feature."
        />
        <div>
          {FEATURES.map((item, index) => (
            <CheckItem title={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
