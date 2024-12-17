import Image from "next/image";
import Button from "./Button";

function Hero() {
  return (
    <div className="max-w-[1920px] mx-auto  bg-[#F2F0FF] flex flex-col lg:flex-row">
      {/* Left Section */}
      <div className=" md:hidden  w-full md:w-[387px] xl:block flex   flex-nowrap justify-center ">
        <Image
          src={"/home/lamp.png"}
          alt="lamp"
          width={500}
          height={500}
          className="w-[387px] overflow-hidden"
        />
      </div>

      {/* Right Section */}
      <div className="flex z-50 flex-col md:flex-row justify-center py-7 items-center w-full">
        {/* Text Content */}
        <div className="w-full md:w-[644px] text-center md:text-left px-4">
          <h3 className="text-[#FB2E86] font-lato font-[800] text-[18px] md:text-[22px]">
            Best Furniture For Your Castle....
          </h3>
          <h1 className="text-[30px] md:text-[53px] leading-[40px] md:leading-[81.98px] font-[600] mt-4">
            New Furniture Collection Trends in 2020
          </h1>
          <p className="font-lato text-[#8A8FB9] font-[700] text-[14px] md:text-[16px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </p>
          <div className="mt-6">
            <Button text="Shop Now" />
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:max-w-[706px]  mt-6 md:mt-0 flex justify-center">
          <Image
            className="w-[300px] md:w-[629px]"
            src={"/home/sofa-header.png"}
            width={2000}
            height={2000}
            alt="Sofa Header"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
