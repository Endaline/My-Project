import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import { PiMusicNotesFill } from "react-icons/pi";
import Image from "next/image";
import { CiShare2 } from "react-icons/ci";
import { MdPlayArrow } from "react-icons/md";

const Shop = () => {
  const shops = [
    {
      image: "images/shop1.jpg.svg",
      caption: "Episode 1 . Technology",
      description: "SRKP selects: how the",
      description2: "new ages work",
    },
    {
      image: "images/shop2.svg",
      caption: "Episode 2 . Technology",
      description: "SRKP selects: a new ",
      description2: "mindset today",
    },
    {
      image: "images/shop3.jpg.svg",
      caption: "Episode 3 . Technology",
      description: "SRKP selects: the latest",
      description2: "trends now",
    },
    {
      image: "images/shop4.jpg.svg",
      caption: "Episode 4. Technology",
      description: "SRKP selects: organize",
      description2: " your day",
    },
    {
      image: "images/shop5.jpg.svg",
      caption: "Episode 5 . Technology",
      description: "SRKP selects: how to plan your work",
      description2: " plan your work",
    },
    {
      image: "images/shop6.svg",
      caption: "Episode 6 . Technology",
      description: "SRKP selects: trying the",
      description2: "best phones",
    },
  ];
  return (
    <div id="shop " className="w-full bg-white mx-auto text-black">
      <div className="mx-[265px] py-40 ">
        <div className="flex justify-between py-10">
          <h1 className="font-bold text-4xl tracking-wider">
            Essential episodes:
          </h1>
          <div className="flex items-center font-bold">
            <p>View all episodes</p>
            <p className="pl-2">
              <LiaArrowRightSolid />
            </p>
          </div>
        </div>
        <div className=" w-full text-black grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-y-6 ">
          {shops.map((shop, id) => (
            <div
              className="h-[500px] w-[340px]  overflow-hidden rounded-lg shadow-2xl hover:drop-shadow-lg cursor-pointer ease-in   "
              key={id}>
              <div className=" relative">
                <Image
                  src={shop.image}
                  alt="card1_image"
                  width={500}
                  height={300}
                  className=" h-80 object-cover"></Image>
                <div className="absolute top-2 right-2 p-3 bg-white rounded-xl">
                  <PiMusicNotesFill />
                </div>
              </div>
              <div className="w-[387px] pl-10 space-y-4">
                <p className="text-[#8E8B8C] card-title text-sm font-light pt-4">
                  {shop.caption}
                </p>
                <h1 className=" border-b-2 border-slate-950 font-bold text-lg w-full max-w-[200px]">
                  {shop.description} <br />
                  {shop.description2}
                </h1>
                <div className="flex items-center">
                  <p className="text-[#8E8B8C]">Share</p>
                  <p className="pl-2">
                    <CiShare2 className="bg-[#8E8B8C] rounded-full text-white" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full relative">
        <Image
          src="images/h1-video-paralax-img-2048x758.jpg.svg"
          width={300}
          height={300}
          alt="domi video"
          className="w-full"></Image>
        <p className="border h-12 w-12 rounded-full absolute top-[50%] left-[50%] flex items-center justify-center bg-white">
          <MdPlayArrow className="text-xl text-black" />
        </p>
      </div>
    </div>
  );
};

export default Shop;
