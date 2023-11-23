import React from "react";
import Image from "next/image";
import { LiaArrowRightSolid } from "react-icons/lia";
import { GiSpeaker } from "react-icons/gi";

const BgCard = () => {
  return (
    <div className="text-black mx-4 xl:mx-[265px] w-full max-w-[1100px] hidden lg:flex ">
      <div className=" bg-white shadow-xl flex rounded-2xl">
        <Image
          src="images/bgcard.svg"
          width={300}
          height={400}
          alt="bgCard"
          className=""></Image>
        <div className="bg-white md:w-full w-3/4 p-8">
          <div>
            <div className="flex md:justify-between justify-center items-center">
              <div>
                <h1 className="font-bold text-3xl">Timmy Mike:the nature</h1>
              </div>
              <div className="flex items-center font-bold cursor-pointer">
                <p>Episode page</p>
                <p className="pl-2">
                  <LiaArrowRightSolid />
                </p>
              </div>
            </div>
            <p className="font-bold text-3xl"> of design </p>
          </div>

          <div>
            <p className="text-[#8E8B8C] pt-4">Episode 1 . Microphone .0:13</p>
          </div>
          <div className="flex items-end gap-2 md:gap-4 pt-4">
            <p className="border w-16 h-16 rounded-full text-[#CECECE] "> </p>
            <p className="text-[#8E8B8C]">
              <i>10s</i> <i>10s</i>
            </p>
            <div className="flex justify-center items-center text-black space-x-3 mb-4">
              <p className="border w-3 h-3  bg-black rounded-full "></p>
              <p className="w-[450px] border-b-2 font-extrabold"></p>
              <p className="text-[#8E8B8C]">00:00/00:00</p>
              <p className="text-2xl">
                <GiSpeaker />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgCard;
