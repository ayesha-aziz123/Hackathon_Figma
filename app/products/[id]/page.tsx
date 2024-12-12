"use client";
import React, { useState } from "react";
import Image from "next/image";
import {products} from "@/components/Shop";
import Heading from "@/components/Heading";
import RelatedProducts from "@/components/RelatedProducts";
import ProductsDescriptions from "@/components/ProductsDescriptions";
import Logos from "@/components/Logos";
import StarRatings from "react-star-ratings";



function Page({ params }: { params: { id: string } }) {
  
  const data = products.find((p) => p.id === parseInt(params.id));
  const [selectedImage, setSelectedImage] = useState<string>(data?.image || "");


  function handleImageClick(image: string): void {
   setSelectedImage(image)
  }

return (
  <main>
      <Heading heading='Product Details' path1="Home" path2="Pages" path3="Product Details" />
      <section className="my-20">
      <div className="max-w-[84%] mx-auto">
        <div className="bg-white w-full md:flex-row flex-col py-4 flex justify-center items-center gap-8">
          <div className="md:w-[15%] hidden md:flex flex-col gap-4 items-center">
            <Image className=" shadow-lg" src={selectedImage} width={150} height={100} alt="image" />
            <Image className=" shadow-lg" src={selectedImage} width={150} height={100} alt="image" />
            <Image className=" shadow-lg" src={selectedImage} width={150} height={100} alt="image" />
          </div>
          <div className="md:w-[40%] shadow-lg">
            <Image   onClick={() => handleImageClick(selectedImage)} src={selectedImage} width={400} height={100} alt="image" />
          </div>
          <div className="md:w-[45%] flex items-start gap-4 flex-col">
            <h3 className="text-3xl font-bold">{data?.title}r</h3>
            <div className="inline-flex gap-x-3 items-center">
            <StarRatings
              starRatedColor="orange"
              numberOfStars={5}
              rating={4}
              starDimension="20px"
              starSpacing="2px"
              name="rating"
            />
            <span>(22)</span>
            </div>
           <div className="inline-flex gap-x-5">
           <span className="text-sm text-[#151875] font-bold">$26.00</span>
           <span style={{textDecoration:"line-through"}} className="text-sm  text-[#FB2E86]">{data?.price}</span>
           </div>
            <span className="text-sm">Color</span>
            <p className="text-sm text-[#A9ACC6] set_lato leading-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tellus porttitor purus, et volutpat sit.
            </p>
            <span className="px-4 p-2 text-[#151875] font-bold">Add To cart </span>
            <span className="text-sm text-[#151875] font-bold" >Categories</span>
            <span className="text-sm text-[#151875] font-bold">Tags</span>
            <span className="text-sm text-[#151875] font-bold">Share</span>
          </div>
        </div>
      </div>
    </section>
      <ProductsDescriptions />
      <RelatedProducts />
      <Logos />
  </main>
)
}

export default Page;
