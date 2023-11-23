"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { TbGridDots } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="flex justify-between fixed w-full text-black z-50 px-6 py-10">
        <div className="cursor-pointer">
          <Link href="/">
            <Image
              src="images/logonew1.png.svg"
              width={100}
              height={100}
              alt="logo"
              className="cursor-pointer"></Image>
          </Link>
        </div>

        <ul className="font-[800] hidden md:flex gap-6 cursor-pointer ">
          <Link href="/">
            <li className="hover:underline transition-all ease-in duration-300">
              Home
            </li>
          </Link>
          <Link href="#pages">
            <li className="hover:underline transition-all ease-in duration-300">
              Pages
            </li>
          </Link>
          <Link href="#podcast">
            <li className="hover:underline transition-all ease-in duration-300">
              Podcast
            </li>
          </Link>
          <Link href="#blog">
            <li className="hover:underline transition-all ease-in duration-300">
              Blog
            </li>
          </Link>
          <Link href="#shop">
            <li className="hover:underline transition-all ease-in duration-300">
              Shop
            </li>
          </Link>
        </ul>
        <div className="flex gap-2 pr-6 md:pr-0">
          <span className="mt-1 cursor-pointer">
            <AiOutlineSearch />
          </span>
          <p>Search</p>
          <span className="mt-1">
            <TbGridDots />
          </span>
        </div>
      </nav>

      <nav className="flex justify-between fixed w-full text-black z-50 px-6 pt-10">
        <div className="w-full pt-6  ">
          {showMenu && (
            <ul className="font-[800] gap-6 cursor-pointer pt-6 w-full z-50 bg-black text-white flex flex-col items-center shadow-2xl rounded-md ">
              <Link href="/">
                <li className="hover:underline transition-all ease-in duration-300">
                  Home
                </li>
              </Link>
              <Link href="#pages">
                <li className="hover:underline transition-all ease-in duration-300">
                  Pages
                </li>
              </Link>
              <Link href="#podcast">
                <li className="hover:underline transition-all ease-in duration-300">
                  Podcast
                </li>
              </Link>
              <Link href="#blog">
                <li className="hover:underline transition-all ease-in duration-300">
                  Blog
                </li>
              </Link>
              <Link href="#shop">
                <li className="hover:underline transition-all ease-in duration-300">
                  Shop
                </li>
              </Link>
            </ul>
          )}
        </div>

        <div className="flex gap-2">
          <div
            className=" flex md:hidden text-xl cursor-pointer pl-4"
            onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <span className="transition-[0.3s] ease-in-out duration-500">
                <LiaTimesSolid />
              </span>
            ) : (
              <span className="transition-[0.3s] ease-in-out duration-500">
                <IoMdMenu />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
