import About from "@/components/About";
import Features from "@/components/Features";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-20">
      <Navbar />
      <About />
      <Features />
      <Image src="/Free.svg" width={50} height={50} alt="" />

      <Image src="/Sponsored.svg" width={50} height={50} alt="" />
      <Image src="/Vector1.svg" width={50} height={50} alt="" />
      <Image src="/Vector2.svg" width={50} height={50} alt="" />
      <Image src="/Vector3.svg" width={50} height={50} alt="" />

      <Image src="/Ellipse 175 (1).svg" width={50} height={50} alt="" />
      <Image src="/Ellipse 175 (2).svg" width={50} height={50} alt="" />
      <Image src="/Ellipse 175.svg" width={50} height={50} alt="" />
      <Image src="/eva_arrow-back-fill.svg" width={50} height={50} alt="" />
      <Image src="/eva_arrow-back-fill1.svg" width={50} height={50} alt="" />

      <Image src="/Group 1120.svg" width={50} height={50} alt="" />

      <Image src="/Group 1226.svg" width={50} height={50} alt="" />
      <Image src="/Huge Global.svg" width={50} height={50} alt="" />
    </main>
  );
}
