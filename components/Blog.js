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
    <div id="blog " className="w-full bg-white mx-auto text-black">
      <div className="mx-[265px] py-40 ">
        <div className="flex justify-between py-10">
          <h1 className="font-bold text-4xl tracking-wider">
            Meet your hosts:
          </h1>
          <div className="flex items-center font-bold">
            <p>View all of them</p>
            <p className="pl-2">
              <LiaArrowRightSolid />
            </p>
          </div>
        </div>
        <div className=" w-full text-black grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-y-6">
          {shops.map((shop, id) => (
            <div
              className="h-[500px] w-[340px]  overflow-hidden rounded-lg shadow-2xl   "
              key={id}>
              <div>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
