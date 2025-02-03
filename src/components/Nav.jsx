import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <header className="w-full flex justify-center py-5 px-1.5">
        <nav
          id="navbar"
          className="max-w-[fit-content] py-[4px] my-1.5 px-[15px] border-[#5cb5c5] border flex flex-row gap-x-5 rounded-[25px]"
        >
          <Link
            to={"/"}
            className="active px-[2px] py-[1.5px] text-[#5cb5c5] text-[12px] has-[.active]:bg-yellow-300"
          >
            Home
          </Link>

          <Link
            to={"/"}
            className="px-[2px] py-[1.5px] text-[#5cb5c5] text-[12px]"
          >
            Projects
          </Link>

          <Link
            to={"/"}
            className="px-[2px] py-[1.5px] text-[#5cb5c5] text-[12px]"
          >
            Tools
          </Link>

          <Link
            to={"/"}
            className="px-[2px] py-[1.5px] text-[#5cb5c5] text-[12px]"
          >
            Connect
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Nav;
