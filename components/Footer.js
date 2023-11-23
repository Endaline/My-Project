import React from "react";
import Image from "next/image";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterFill } from "react-icons/ri";
import { LiaInstagram } from "react-icons/lia";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black w-full text-white">
      <div className="mx-4 lg:mx-[265px]">
        <div className="flex flex-col md:flex-row max-w-full md:max-w-2xl mx-auto">
          <div className="w-full md:w-[332.5px] mb-8 md:mb-0">
            <Image
              src="images/logo2.svg"
              width={100}
              height={100}
              alt="logo"
              className="text-black"
            />
            <p className="text-[#969696]">The great connection.</p>
          </div>
          <h2 className="md:pl-4">
            We collaborate with ambitious brands and people; let’s build
            something great together.
          </h2>
        </div>
        <div className="flex flex-wrap justify-between py-10 space-y-4 md:space-y-0 text-[#969696]">
          <div className="w-full md:w-auto">
            <p>Start a conversation:</p>
            <address>podcast@example.com</address>
            <address>+2 969 866 7033</address>
          </div>
          <div className="md:pl-8 space-y-4">
            <p>Find us here:</p>
            <div>
              <address>Brooklyn, NY 11201</address>
              <address>United States</address>
            </div>
          </div>
          <div className="md:pl-8 space-y-4">
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
            <p className="invisible">hhhh</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ml-0 lg:ml-64 justify-between text-[#CCCCCC]">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>&copy;2021 Qode Interactive. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
