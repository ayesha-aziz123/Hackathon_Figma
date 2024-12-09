"use client";

import React, { useState } from "react";
import Image from "next/image";
import Heading from "@/components/Heading";

const initialCartItems = [
  {
    name: "Ut diam consequat",
    price: 10.99,
    quantity: 2,
    image: "/cart/cart1.png",
  },
  {
    name: "Vel faucibus posuere",
    price: 3.49,
    quantity: 1,
    image: "/cart/cart2.png",
  },
  {
    name: "Ac vitae vestibulum",
    price: 9.99,
    quantity: 4,
    image: "/cart/cart3.png",
  },
  {
    name: "Elit massa diam",
    price: 4.49,
    quantity: 1,
    image: "/cart/cart4.png",
  },
  {
    name: "Proin pharetra elementum",
    price: 11.99,
    quantity: 3,
    image: "/cart/cart5.png",
  },
];

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
//   const [couponCode] = useState("");
//   const [discount] = useState(0);

  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

 
//   const cartSubtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   const shippingCharges = 30.0;
//   const totalAmount = cartSubtotal - cartSubtotal * discount + shippingCharges;

  return (
    <div className="bg-white text-[#1D3178]   max-w-[1920px] mx-auto">
      <header
        className="bg-cover bg-center h-36 md:h-48 flex items-center justify-center"
        style={{ backgroundImage: "url(/path/to/header-bg.jpg)" }}
      >
        <Heading
          heading="Shopping Curt"
          path1="Home"
          path2="Pages"
          path3="shopping curt"
        />
      </header>
      <div className="flex justify-center py-32  gap-x-3 ">
        <div className="py-8  w-[60%] px-4 sm:px-8 md:px-16 lg:px-2">
          <table className=" border-collapse w-[90%] text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 md:p-4 font-semibold">Product</th>
                <th className="p-2 md:p-4 font-semibold">Price</th>
                <th className="p-2 md:p-4 font-semibold">Quantity</th>
                <th className="p-2 md:p-4 font-semibold">Total</th>
                <th className="p-2 md:p-4 font-semibold">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2 md:p-4 flex items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="w-12 h-12 md:w-16 md:h-16 object-cover rounded mr-2 md:mr-4"
                    />
                    <span className="truncate">{item.name}</span>
                  </td>
                  <td className="p-2 md:p-4">${item.price.toFixed(2)}</td>
                  <td className="p-2 md:p-4">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          index,
                          parseInt(e.target.value) || 0
                        )
                      }
                      className="w-12 md:w-16 border rounded px-1 md:px-2 py-1 text-center"
                      min="0"
                    />
                  </td>
                  <td className="p-2 md:p-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td
                    className="p-2 md:p-4 text-red-500 cursor-pointer"
                    onClick={() => handleRemoveItem(index)}
                  >
                    &times;
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col">
          <div className="w-[371px]  set_lato ">
            <h1 className="text-[20px] text-center py-6 text-[#1D3178] font-semibold">
              Cart Totals
            </h1>
            <div className="bg-[#F4F4FC] p-5">
              <div className="flex py-7 justify-between items-center ">
                <h2 className="text-[#1D3178] font-semibold ">Subtotals:</h2>
                <p>£219.00</p>
              </div>
              <hr />
              <div className="flex  py-5 justify-between items-center">
                <h2 className="text-[#1D3178] font-semibold">Totals::</h2>
                <p>£325.00</p>
              </div>
              <hr />
              <p className="py-5">Shipping & taxes calculated at checkout</p>
              <button className="text-white  bg-[#19D16F] w-full h-[40px]">
                Proceed To Checkout
              </button>
            </div>
          </div>

          <div className="w-[371px]   set_lato ">
            <h1 className="text-[20px] text-center py-6 text-[#1D3178] font-semibold">
              Calculate Shipping
            </h1>
            <div className=" bg-[#F4F4FC] p-5">
              <h2 className="text-[#1D3178] font-semibold py-5">Bangladesh</h2>
            
            <hr />
            <h2 className="text-[#1D3178] py-4 font-semibold">
              Mirpur Dhaka - 1200
            </h2>
            <hr />
            <p className="py-5">Shipping & taxes calculated at checkout</p>
            <button className="text-white  bg-[#FB2E86] w-full h-[40px]">
            Calculate Shiping
            </button>
          </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
