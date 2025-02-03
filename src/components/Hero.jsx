import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero w-full px-3 md:px-24 lg:px-40 py-4 md:py-16 flex flex-wrap gap-2">
        <div className="basis-[100%] md:basis-[60%]">
          <h1 className="text-xl text-center md:text-left md:text-[42px] text-[#31a8ff] md:mb-7">
            David Athel.
          </h1>
          <h2 className="text-2xl text-center md:text-left md:text-[82px] text-white font-[600] md:mb-10">
            Web3
          </h2>
          <h3 className="text-xl md:text-[92px] md:ml-10 font-[600] text-[#31a8ff] text-center md:mb-14 tracking-wide">
            Developer
          </h3>

          <p className="text-[#31a8ff] text-base tracking-wider">
            I’m David - a Software Developer with expertise in crafting
            optimized user-friendly Interfaces and User Experiences.
          </p>
        </div>
        <div className="basis-[100%] md:basis-[40%]"></div>
      </section>
    </>
  );
};

export default Hero;
