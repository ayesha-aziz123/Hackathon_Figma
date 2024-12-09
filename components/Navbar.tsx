// import { ArrowDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MdMenu } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";


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
    <div className="max-w-[1000px] lg:flex  my-5 mx-auto h-[40px]  justify-between gap-x-[130px] items-center">
      <div>
        <h1 className="font-[700] text-[34px] leading-[34px]">Hekto</h1>
      </div>
      <div className="set_lato hidden lg:flex md:justify-center  items-center">
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

      <div className="hidden lg:flex justify-center items-center w-[317px] h-[40px]">
        <input type="text" className="border-[1px] border-gray-300" />
        <div className="bg-[#FB2E86]  flex items-center h-[25px] text-white">
          <IoSearch className="w-[51px] size-5   " />
        </div>
      </div>


      <div className="">
            <Sheet>
              <SheetTrigger>
                <div>
                  <MdMenu size={40} className="absolute right-5 top-20 w-8 ml-1 lg:hidden block" />
                </div>
              </SheetTrigger>
              <SheetContent >
                <div className="mt-28">
                  <div className="flex justify-center gap-5 mb-10">
                    <Link href={"/shopingCart"}>
                      <BsCart2 size={20} className=" w-10" />
                    </Link>

                    <Link href={"/myaccount"}>
                      <FiUser size={20} className=" w-10" />
                    </Link>

                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search.."
                        className=" w-full outline-none rounded-3xl md:px-6 px-2 py-2 border-[1px] border-black"
                      />
                      <IoSearch className="absolute top-2 right-4 text-2xl" />
                    </div>
                  </div>
                  <ul className="flex flex-col text-xl gap-10">
                    <li>
                      <Link href={"/"}>Home</Link>
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
                    <li className="flex items-center">
                      <Link href={"/shop"}>Shop</Link>
                      <IoIosArrowDown />
                    </li>
                    <li>
                      <Link href={"/about"}>About</Link>
                    </li>
                    <li>
                      <Link href={"/contact"}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
    </div>
  );
}

export default Navbar;
