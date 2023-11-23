import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import { PiMusicNotesFill } from "react-icons/pi";
import Image from "next/image";
import { BiLogoFacebook } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";
import { RiTwitterFill } from "react-icons/ri";

const Blog = () => {
  const shops = [
    {
      image: "images/p2-team-img1.jpg.svg",
      caption: "Creative Strategist",
      description: "Bella Jimenez",
    },
    {
      image: "images/p2-team-img2.jpg.svg",
      caption: "Creative Strategist",
      description: "Edwin Watson ",
    },
    {
      image: "images/p2-team-img3.jpg.svg",
      caption: "Creative Strategist",
      description: "Caitlin Henderson",
    },
  ];
  return (
    <div id="blog" className="w-full bg-white mx-auto text-black">
      <div className="mx-4 xl:mx-[265px] py-10 md:py-40">
        <div className="flex flex-col md:flex-row justify-between items-center md:py-10">
          <h1 className="font-bold text-2xl md:text-4xl tracking-wider mb-4 md:mb-0">
            Meet your hosts:
          </h1>
          <div className="flex items-center font-bold cursor-pointer text-sm md:text-base">
            <p>View all of them</p>
            <p className="pl-2">
              <LiaArrowRightSolid />
            </p>
          </div>
        </div>
        <div className="w-full text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-0 lg:gap-x-6">
          {shops.map((shop, id) => (
            <div
              className="h-[500px] w-full md:w-[340px]  overflow-hidden rounded-lg shadow-2xl"
              key={id}>
              <div className="relative">
                <Image
                  src={shop.image}
                  alt="card1_image"
                  width={500}
                  height={300}
                  className="h-80 w-full object-cover"
                />
                <div className="absolute top-2 right-2 p-3 bg-white rounded-xl">
                  <PiMusicNotesFill />
                </div>
              </div>
              <div className="w-full md:w-[387px] pl-4 md:pl-10 space-y-4">
                <p className="text-[#8E8B8C] card-title text-sm font-light pt-4">
                  {shop.caption}
                </p>
                <h1 className="border-b-2 border-slate-950 font-bold text-base md:text-lg w-full max-w-[200px]">
                  {shop.description} <br />
                  {shop.description2}
                </h1>
                <div className="flex items-center space-x-4 cursor-pointer">
                  <p className="hover:text-yellow-700 transition-all ease-in">
                    <BiLogoFacebook className="bg-[#8E8B8C] rounded-full text-white flex items-center justify-center" />
                  </p>
                  <p className="text-2xl">
                    <GrLinkedinOption className="bg-[#8E8B8C] rounded-full text-white flex items-center justify-center h-4 w-4" />
                  </p>
                  <p>
                    <RiTwitterFill className="bg-[#8E8B8C] rounded-full text-white flex items-center justify-center" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
