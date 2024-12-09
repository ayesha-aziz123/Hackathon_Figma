// import { ArrowDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

// const navLinks = [
//   {
//     id: 1,
//     label: "Home",
//     url: "/",
//   },
//   {
//     id: 2,
//     label: "Pages",
//     url: "/",
//   },
//   {
//     id: 3,
//     label: "Products",
//     url: "/",
//   },
//   {
//     id: 4,
//     label: "Blog",
//     url: "/",
//   },
//   {
//     id: 5,
//     label: "Shop",
//     url: "/",
//   },
//   {
//     id: 6,
//     label: "Contact",
//     url: "/",
//   },
// ];

function Navbar() {
  return (
    <div className="max-w-[1000px] lg:flex hidden my-5 mx-auto h-[40px]  justify-between gap-x-[130px] items-center">
      <div>
        <h1 className="font-[700] text-[34px] leading-[34px]">Hekto</h1>
      </div>
      <div className="set_lato flex justify-center  items-center">
        <ul className="flex items-center gap-x-7">
          <li className="flex items-center ">
            <Link href={"/"}>Home</Link>
            <IoIosArrowDown />
          </li>
          <li>
            <Link href={"/demo"}>Pages</Link>
          </li>
          <li>
            <Link href={"/products"}>Products</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>

      <div className="flex justify-center items-center w-[317px] h-[40px]">
        <input type="text" className="border-[1px] border-gray-300" />
        <div className="bg-[#FB2E86]  flex items-center h-[25px] text-white">
          <IoSearch className="w-[51px] size-5   " />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
