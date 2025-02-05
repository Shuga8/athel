import React from "react";
import arrow_bg from "../assets/big_arrow.png";

const Footer = () => {
  return (
    <div className="w-full px-3 py-10 mt-10">
      <h4 className="text-center text-3xl lg:text-4xl font-[500] text-white">
        Let's Connect
      </h4>

      <div className="w-full flex gap-x-12 gap-y-5 justify-center pt-8 pb-4">
        <div className="text-center flex justify-center">
          <a
            href="https://x.com/Atheloftomorrow?t=WsZHgVoSB0teeln45ABseQ&s=08"
            target="_blank"
            referrerPolicy="no-referrer"
            className="py-2 w-[140px] text-center text-white flex flex-row justify-center gap-x-1.5 text-[17px] bg-[#061A40] hover:bg-[#061a40c0] rounded-[25px] transition-colors ease-linear duration-300"
          >
            <span>X</span>
            <img src={arrow_bg} alt="" className="w-[18px] object-contain" />
          </a>
        </div>

        <div className="text-center flex justify-center">
          <a
            href="https://discord.com/users/1085961867157045308"
            target="_blank"
            referrerPolicy="no-referrer"
            className="py-2 w-[140px] text-center text-white flex flex-row justify-center gap-x-1.5 text-[17px] bg-[#061A40] hover:bg-[#061a40c0] rounded-[25px] transition-colors ease-linear duration-300"
          >
            <span>Discord</span>
            <img src={arrow_bg} alt="" className="w-[18px] object-contain" />
          </a>
        </div>
      </div>

      <div className="w-full flex gap-x-12 gap-y-5 justify-center pt-4 pb-8">
        <div className="text-center flex justify-center">
          <a
            href="https://t.me/athelking"
            target="_blank"
            referrerPolicy="no-referrer"
            className="py-2 w-[140px] text-center text-white flex flex-row justify-center gap-x-1.5 text-[17px] bg-[#061A40] hover:bg-[#061a40c0] rounded-[25px] transition-colors ease-linear duration-300"
          >
            <span>Telegram</span>
            <img src={arrow_bg} alt="" className="w-[18px] object-contain" />
          </a>
        </div>

        <div className="text-center flex justify-center">
          <a
            href="mailto:Athelathel7@gmail.com"
            referrerPolicy="no-referrer"
            className="py-2 w-[140px] text-center text-white flex flex-row justify-center gap-x-1.5 text-[17px] bg-[#061A40] hover:bg-[#061a40c0] rounded-[25px] transition-colors ease-linear duration-300"
          >
            <span>Mail</span>
            <img src={arrow_bg} alt="" className="w-[18px] object-contain" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
