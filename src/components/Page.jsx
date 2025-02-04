import { Hero, Nav } from "./index";

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
        </div>
      </div>
    </>
  );
};

export default Page;
