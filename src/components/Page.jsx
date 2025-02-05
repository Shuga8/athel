import { Hero, Nav } from "./index";
import kanga from "../assets/image-239-1024x497.png";
import arrow from "../assets/arrow.svg";
import pixel from "../assets/Pixelverse-Info.png";
import kitty from "../assets/kitty.jpg";
import flexbot from "../assets/Flexbot-DYKMVPnb.png";
import deep from "../assets/images.jpg";

const Page = () => {
  return (
    <>
      <Nav />
      <div className="page-container w-full">
        <Hero />
        <div className="py-12 md:py-24 px-14 md:px-32 lg:px-44">
          <h2 className="text-white text-[30px] md:text-[40px] lg:text-[55px] font-[550] capitalize">
            Building Dynamic And Engaging Platforms for:
          </h2>
          <p className="text-lg text-white leading-9">
            Memecoins, DAOs, NFT Projects, DeFi Projects, Crypto Wallets,
            Blockchain Integrations, Token Launch Platforms, Crypto Exchanges,
            Web3 Gaming, ...and many more.
          </p>
        </div>

        <div className="projects w-full py-8 md:py-16 px-14 md:px-32 lg:px-44">
          <h2 className="text-white text-[25px] md:text-[35px] lg:text-[45px] font-[550] capitalize text-center">
            My Projects
          </h2>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-4 lg:py-0">
            <div className="w-full h-full flex flex-col gap-y-3.5 justify-center items-center pt-12 lg:pt-0">
              <h4 className="text-2xl md:text-5xl text-white font-[450]">
                Kanga Exchange
              </h4>
              <p className="text-base text-white">
                Website for trading platform
              </p>

              <a
                href=""
                target="_blank"
                referrerPolicy="no-refferer"
                className="flex flex-row gap-x-0.5"
              >
                <span className="text-cyan-500 text-lg">VIEW LIVE</span>
                <img src={arrow} alt="" className="object-contain" />
              </a>
            </div>

            <div className="">
              <img
                src={kanga}
                alt=""
                className="aspect-square object-contain mt-[-40px] lg:mt-0"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-4 lg:py-0 mt-0 lg:mt-[-180px]">
            <div className="w-full h-full flex flex-col gap-y-3.5 justify-center items-center pt-12 lg:pt-0">
              <h4 className="text-2xl md:text-5xl text-white font-[450]">
                Pixel Verse
              </h4>
              <p className="text-base text-white">Web3 gaming project</p>

              <a
                href=""
                target="_blank"
                referrerPolicy="no-refferer"
                className="flex flex-row gap-x-0.5"
              >
                <span className="text-cyan-500 text-lg">VIEW LIVE</span>
                <img src={arrow} alt="" className="object-contain" />
              </a>
            </div>

            <div className="">
              <img
                src={pixel}
                alt=""
                className="aspect-square object-contain mt-[-40px] lg:mt-0"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-4 lg:py-0 mt-0 lg:mt-[-50px]">
            <div className="w-full h-full flex flex-col gap-y-3.5 justify-center items-center pt-12 lg:pt-0">
              <h4 className="text-2xl md:text-5xl text-white font-[450]">
                Kittymint
              </h4>
              <p className="text-base text-white">Telegram gaming project.</p>

              <a
                href=""
                target="_blank"
                referrerPolicy="no-refferer"
                className="flex flex-row gap-x-0.5"
              >
                <span className="text-cyan-500 text-lg">VIEW LIVE</span>
                <img src={arrow} alt="" className="object-contain" />
              </a>
            </div>

            <div className="">
              <img
                src={kitty}
                alt=""
                className="aspect-square w-full h-[250px] object-cover mt-[-40px] lg:mt-0"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-4 lg:py-0 mt-0 lg:mt-[50px]">
            <div className="w-full h-full flex flex-col gap-y-3.5 justify-center items-center pt-12 lg:pt-0">
              <h4 className="text-2xl md:text-5xl text-white font-[450]">
                Flexbot
              </h4>
              <p className="text-base text-white">
                All-in-One Comprehensive trading bot.
              </p>

              <a
                href=""
                target="_blank"
                referrerPolicy="no-refferer"
                className="flex flex-row gap-x-0.5"
              >
                <span className="text-cyan-500 text-lg">VIEW LIVE</span>
                <img src={arrow} alt="" className="object-contain" />
              </a>
            </div>

            <div className="">
              <img
                src={flexbot}
                alt=""
                className="aspect-square w-full h-[350px] object-cover mt-[-40px] lg:mt-0"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 py-4 lg:py-0 mt-0 lg:mt-[50px]">
            <div className="w-full h-full flex flex-col gap-y-3.5 justify-center items-center pt-12 lg:pt-0">
              <h4 className="text-2xl md:text-5xl text-white font-[450]">
                DeepSouth AI
              </h4>
              <p className="text-base text-white">AI 3D Site</p>

              <a
                href=""
                target="_blank"
                referrerPolicy="no-refferer"
                className="flex flex-row gap-x-0.5"
              >
                <span className="text-cyan-500 text-lg">VIEW LIVE</span>
                <img src={arrow} alt="" className="object-contain" />
              </a>
            </div>

            <div className="">
              <img
                src={deep}
                alt=""
                className="aspect-square w-full h-[350px] object-contain mt-[-40px] lg:mt-0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
