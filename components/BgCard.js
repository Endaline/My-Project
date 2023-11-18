import React from "react";
import Image from "next/image";

const BgCard = () => {
  return (
    <div className="flex text-black pl-20">
      <div>
        <Image
          src="images/bgcard.svg"
          width={250}
          height={200}
          className=""
        ></Image>
      </div>
      <div className="bg-white w-full">
        <div>
          <h1 className="font-bold text-2xl">
            Timmy Mike:the nature <br /> of design
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BgCard;
