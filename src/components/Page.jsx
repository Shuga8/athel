import React from "react";
import { Hero, Nav } from "./index";

const Page = () => {
  return (
    <>
      <Nav />
      <div className="page-container w-full">
        <Hero />
      </div>
    </>
  );
};

export default Page;
