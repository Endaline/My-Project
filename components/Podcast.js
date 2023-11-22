"use client";
import React from "react";
import Image from "next/image";
import { PiMusicNotesFill } from "react-icons/pi";
import { LiaArrowRightSolid } from "react-icons/lia";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Podcast = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const podcastDatas = [
    {
      id: 1,
      imageUrl: "images/div.qodef-e-media-image.svg",
      title: "Episode 7 .Technology",
      description1: " SRKP selects:open your",
      description2: "mind easy",
    },
    {
      id: 2,
      imageUrl: "images/cardimage1.svg",
      title: "Episode 8 .Technology",
      description1: " SRKP selects:keep your",
      description2: "watch",
    },
    {
      id: 3,
      imageUrl: "images/shop1.jpg.svg",
      title: "Episode 9 .Technology",
      description1: " SRKP selects:to hide",
      description2: "behind safe",
    },
    {
      id: 4,
      imageUrl: "images/shop5.jpg.svg",
      title: "Episode 10 .Technology",
      description1: " SRKP selects:keep your",
      description2: "watch",
    },

    {
      id: 1,
      imageUrl: "images/div.qodef-e-media-image.svg",
      title: "Episode 7 .Technology",
      description1: " SRKP selects:open your",
      description2: "mind easy",
    },
    {
      id: 2,
      imageUrl: "images/cardimage1.svg",
      title: "Episode 8 .Technology",
      description1: " SRKP selects:keep your",
      description2: "watch",
    },
    {
      id: 3,
      imageUrl: "images/shop1.jpg.svg",
      title: "Episode 9 .Technology",
      description1: " SRKP selects:to hide",
      description2: "behind safe",
    },
    {
      id: 4,
      imageUrl: "images/shop5.jpg.svg",
      title: "Episode 10 .Technology",
      description1: " SRKP selects:keep your",
      description2: "watch",
    },
  ];

  return (
    <div id="podcast" className="w-full max-h-[832px] bg-[#F8F8F8] ">
      <div className=" text-black w-full py-12">
        <div className="flex flex-col items-center justify-center pt-6">
          <h1 className="text-3xl font-bold">Top podcasts:</h1>
          <p className="pt-2">
            Discover the selection of the most popular podcasts.
          </p>
        </div>
        <div className="flex pt-8">
          <div className=" w-full h-[350px]">
            <Slider {...settings}>
              {podcastDatas.map((podcastData, id) => (
                <div className=" overflow-hidden  " key={id}>
                  <div
                    id={podcastData.id}
                    className=" relative flex items-center verflow-x-auto shadow-2xl  h-[300px] w-[500px]">
                    <Image
                      src={podcastData.imageUrl}
                      alt="card1_image"
                      width={300}
                      height={300}
                      className=" h-60 object-cover"></Image>
                    <div className="absolute top-10 left-44 p-2 bg-white rounded-xl">
                      <PiMusicNotesFill />
                    </div>
                    <div className="w-full space-y-3 pl-6">
                      <p className="text-[#8E8B8C]">{podcastData.title}</p>
                      <h1 className=" border-b-2 border-slate-950 font-bold text-lg w-full max-w-[200px]">
                        {podcastData.description1} <br />
                        {podcastData.description2}
                      </h1>
                      <div className="flex items-center">
                        <p>Episode page</p>
                        <p>
                          <LiaArrowRightSolid />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Podcast;
