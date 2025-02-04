import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/100x100.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Nav = () => {
  return (
    <>
      <header className="w-full flex justify-between py-5 px-1.5">
        <div className="logo">
          <img
            src={logo}
            className="w-[100px] h-[100px] object-contain"
            alt=""
          />
        </div>
      </header>
    </>
  );
};

export default Nav;
