import React from "react";
import DemoProduct from "./demoproduct/Demoproduct";
import ShippingInfo from "./shippingInfo/ShippingInfo";
import Heading from "@/components/Heading";

const Demo = () => {
  return (
    <div>
      <Heading heading="Hekto Demo" />
      <div className="lg:container lg:px-[1.3rem] px-[.8rem] lg:flex justify-center gap-8 lg:mb-32">
        <div className=" lg:w-[770px]">
          <ShippingInfo />
        </div>

        <div className="lg:w-[400px] ">
          <DemoProduct />
        </div>
      </div>
    </div>
  );
};

export default Demo;
