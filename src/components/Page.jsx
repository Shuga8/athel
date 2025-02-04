import { Hero, Nav } from "./index";

const Page = () => {
  return (
    <>
      <Nav />
      <div className="page-container w-full">
        <Hero />
        <div className="py-12 md:py-24 px-14 md:px-32 lg:px-44">
          <h2 className="text-white text-[30px] md:text-[40px] lg:text-[60px] font-[700] capitalize">
            Building Dynamic And Engaging Platforms for:
          </h2>
          <p className="text-lg text-white leading-9">
            Memecoins, DAOs, NFT Projects, DeFi Projects, Crypto Wallets,
            Blockchain Integrations, Token Launch Platforms, Crypto Exchanges,
            Web3 Gaming, ...and many more.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
