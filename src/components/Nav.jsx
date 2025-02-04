import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/100x100.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Nav = () => {
  return (
    <>
      <header className="w-full flex justify-between py-5 px-3 md:px-12 relative">
        <div className="logo w-[130px] h-[140px] bg-tranparent sticky z-[2]">
          <img
            src={logo}
            className="w-[150px] h-[150px] object-contain"
            alt=""
          />
        </div>

        <nav>
          <button className="text-[20px] text-white px-3.5 py-2">
            <HiOutlineMenuAlt3 />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Nav;
