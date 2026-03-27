import React from "react";
import Image from "next/image";
import potraitImage from "@/assets/portfolio.png";

const Hero = () => {
  return (
    <section className="container-wrapper flex justify-between">
      <div className="flex-[0.7] mt-auto flex flex-col ">
        <h1 className="self-start">Software</h1>
        <h1 className="self-end">Engineer</h1>
      </div>
      <div className="flex-[0.3] p-4 flex items-end gap-24 flex-col">
        <Image src={potraitImage} alt="" className="rounded-2xl" height={280} loading="eager"></Image>
        <div>
          <h6 className="font-semibold text-end leading-4">
            Hey, I'm Rohit <br /> A Software Engineer <br /> Scalable architecture & <br /> and systems.
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Hero;
