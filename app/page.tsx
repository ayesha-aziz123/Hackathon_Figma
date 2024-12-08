import Banner from "./components/Banner";
import DiscountItem from "./components/DiscountItem";
import Feature2 from "./components/Feature2";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import LeatestBlog from "./components/LatestBlog";
import LatestProduct from "./components/LatestProduct";
import TopCategory from "./components/TopCategory";
import TrendingProduct from "./components/TrendingProduct";
import UniqueFeature from "./components/UniqueFeature";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Featured/>
      <LatestProduct/>
      <Feature2 heading={"What Shopex Offer!"}/>
      <UniqueFeature/>
      <TrendingProduct/>
      <DiscountItem/>
      <TopCategory/>
      <Banner/>
      <div className="flex justify-center items-center my-9">
      <Image src={"/banner2.png"} alt={""} width={1000} height={1000}/>
      </div>
      <LeatestBlog/>


    </div>
  );
}