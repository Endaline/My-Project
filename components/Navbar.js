import Link from "next/link";
import React from "react";
import Image from "next/image";
import { TbGridDots } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between fixed w-full text-black ">
        <div>
          <Link href="/">
            <Image
              src="images/logonew1.png.svg"
              width={100}
              height={100}
              alt="logo"
              className=""
            ></Image>
          </Link>
        </div>

        <ul className="font-[800] flex gap-6 cursor-pointer">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="#pages">
            <li>Pages</li>
          </Link>
          <Link href="#podcast">
            <li>Podcast</li>
          </Link>
          <Link href="#blog">
            <li>Blog</li>
          </Link>
          <Link href="#shop">
            <li>Shop</li>
          </Link>
        </ul>
        <div className="flex gap-2">
          <span className="mt-1 cursor-pointer">
            <AiOutlineSearch />
          </span>
          <p>Search</p>
          <span className="mt-1">
            <TbGridDots />
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
