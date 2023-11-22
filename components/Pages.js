import React from "react";
import Image from "next/image";
import { LiaArrowRightSolid } from "react-icons/lia";

const Pages = () => {
  return (
    <div
      id="pages"
      className="bg-white w-full h-[80vh] text-black overflow-hidden">
      <div className="mx-[265px] pt-60 max-h-[34rem] flex w-full max-w[1300px] gap-x-20 md:gap-x-40">
        <div className=" max-w-[32.5rem] space-y-4">
          <h1 className="text-3xl font-bold">
            Best places to find <br /> design inspiration
          </h1>
          <div className="flex items-center gap-3 ">
            <p className="border w-14 h-14 rounded-full text-[#CECECE] "> </p>
            <div>
              <p className="text-black">Episode 1</p>
              <p className="text-[#8E8B8C]">
                Category <i>.</i>0:13
              </p>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
          </div>
          <div>
            <p>
              Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex items-center font-bold gap-x-2">
            <p>Episode page</p>
            <p>
              <LiaArrowRightSolid />
            </p>
          </div>
        </div>

        <div>
          <Image
            src="images/div.qodef-e-image.svg"
            alt=""
            width={400}
            height={400}
            className="object-cover w-full h-[25rem] rounded-2xl"></Image>
        </div>
      </div>
    </div>
  );
};

export default Pages;
