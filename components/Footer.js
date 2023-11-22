import React from "react";
import Image from "next/image";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterFill } from "react-icons/ri";
import { LiaInstagram } from "react-icons/lia";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black w-ful text-white">
      <div className="mx-[265px]">
        <div className="flex items-center max-w-[700px]">
          <div className="w-[332.5px]">
            <Image
              src="images/logo2.svg"
              width={100}
              height={100}
              alt="logo"
              className="text-black"></Image>
            <p className="text-[#969696]">The great connection.</p>
          </div>
          <h2 className="">
            We collaborate with ambitious brands and people; let’s build
            something great together.
          </h2>
        </div>
        <div className="flex items-center justify-center py-10 space-x-4 text-[#969696]">
          <div className="">
            <p>Start a conversation:</p>
            <address>podcast@example.com</address>
            <address>+2 969 866 7033</address>
            <p className="pt-8">Terms & Conditions</p>
          </div>
          <div className="pl-8 space-y-4">
            <p>Find us here:</p>

            <div>
              <address>Brooklyn, NY 11201</address>
              <address> United States</address>
            </div>

            <p>Privacy Policy</p>
          </div>
          <div className="pl-8 space-y-4">
            <p>Follow us on:</p>
            <div className="flex items-center space-x-4">
              <p className="hover:text-yellow-700 transition-all ease-in">
                <BiLogoFacebook className="bg-[#8E8B8C] rounded-full text-white flex items-center justify-center" />
              </p>
              <p>
                <RiTwitterFill />
              </p>
              <p>
                <LiaInstagram />
              </p>
              <p>
                <AiOutlineYoutube />
              </p>
            </div>
            <p> &commat 2021 Qode Interactive. All Rights Reserved</p>
            <p className=" invisible">hhhh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
