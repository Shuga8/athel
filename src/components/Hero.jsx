import React from "react";
import monkey from "../assets/monkey.svg";
import { Link } from "react-router-dom";
import arrow from "../assets/arrow.svg";

const Hero = () => {
  return (
    <>
      <section className="hero w-full px-10 py-4 md:py-16  mt-[-135px] md:mt-[-160px] ">
        <div className="relative hero-banner py-[100px] md:py-[60px] w-full px-14 text-center md:text-left md:px-44 lg:px-64">
          <h1 className="text-base text-white mb-2 font-[500]">Hi , I am</h1>
          <h2 className="text-xl md:text-4xl text-white font-[400]">Athel.</h2>
          <h3 className="text-xl md:text-7xl text-white font-[650]">Web3</h3>
          {/* <h3 className="text-xl md:text-7xl ml-0 md:ml-32 text-white font-[650]">
            Developer
          </h3> */}
          <div className="max-w-fit pb-24">
            <div className="w-[130px] h-[130px] float-left">
              <img
                src={monkey}
                alt=""
                className="w-[100px] h-full object-contain"
              />
            </div>
            <h3 className="text-xl md:text-7xl float-right text-white font-[650]">
              Developer
            </h3>
          </div>

          <p className="pt-10 pb-6 text-sm text-white tracking-wider">
            I’m Athel - a Software Developer with expertise in crafting
            optimized user-friendly Interfaces and User Experiences.
          </p>

          <Link
            to={"mailto:Athelathel7@gmail.com"}
            className="px-10 py-2.5 bg-white border border-white text-[#061A40] text-sm rounded-[25px] uppercase font-[700] hover:bg-transparent hover:text-white transition-colors ease-in-out duration-300"
          >
            Hire Me
          </Link>

          <div className="links absolute right-10 top-[25%] translate-y-[-25%] bg-[#000000] px-4 py-3 rounded-xl hidden md:flex flex-col gap-y-5">
            <a
              href="https://t.me/athelking"
              target="_blank"
              referrerPolicy="no-refferer no-redirect"
              className="w-full text-white flex flex-row gap-x-1.5 text-xs place-items-center py-0.5 px-1 bg-[#080b12] hover:bg-[#061A40] transition-"
            >
              <span>Telegram</span>
              <img src={arrow} alt="" className="object-contain" />
            </a>
            <a
              href="https://discord.com/users/1085961867157045308"
              target="_blank"
              referrerPolicy="no-refferer no-redirect"
              className="w-full text-white flex flex-row gap-x-0.5 text-xs place-items-center"
            >
              <span>Discord</span>
              <img src={arrow} alt="" className="object-contain" />
            </a>
            <a
              href="mailto:Athelathel7@gmail.com"
              referrerPolicy="no-refferer no-redirect"
              className="w-full text-white flex flex-row gap-x-0.5 text-xs place-items-center"
            >
              <span>Mail</span>
              <img src={arrow} alt="" className="object-contain" />
            </a>
            <a
              href="https://x.com/Atheloftomorrow?t=WsZHgVoSB0teeln45ABseQ&s=08"
              target="_blank"
              referrerPolicy="no-refferer no-redirect"
              className="w-full text-white flex flex-row gap-x-0.5 text-xs place-items-center"
            >
              <span>X</span>
              <img src={arrow} alt="" className="object-contain" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
