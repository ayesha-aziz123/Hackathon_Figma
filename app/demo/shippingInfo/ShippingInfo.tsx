import React from "react";

const ShippingInfo = () => {
  return (
    <div>
      <div className="mt-9 ">
        <h1 className="text-[#1D3178] text-[24px] font-extrabold">
          Hekto Demo
        </h1>
        <p className="text-[#1D3178] text-[12px] set_lato font-bold mt-4 mb-5">
          Cart/ Information/ Shipping/ Payment
        </p>
      </div>
      <div className="bg-[#F8F8FD] md:p-8 p-2 pb-16 ">
        <div className="md:flex justify-between">
          <h3 className="text-[#1D3178] md:mt-9v text-[18px] font-extrabold ">
            Contact Information
          </h3>
          <div className="flex">
            <h6 className="text-[14px] text-[#C1C8E1] set_lato mr-2">
              Already have an account?
            </h6>
            <h6 className="text-[14px] text-[#C1C8E1] set_lato">Log in</h6>
          </div>
        </div>

        <h6 className="text-[14px] text-[#C1C8E1] set_lato mb-2 mt-6 md:mt-9">
          Email or mobile phone number
        </h6>
        <div className="border-[1px] "></div>

        <div className="flex items-center gap-2 mt-4 md:mt-8">
          <input
            className="bg-lightGreen w-[8px] h-[8px] text-lightGreen border-none"
            type="checkbox"
            name=""
            id=""
          />
          <h6 className="text-[#8A91AB] set_lato text-[12px]">
            Keep me up to date on news and excluive offers
          </h6>
        </div>

        <div className="md:mt-28 mt-12">
          <h3 className="  md:mb-12 mb-6 text-[18px] font-extrabold text-[#1D3178]">
            Shipping address
          </h3>

          <div>
            <div className="md:flex justify-between">
              <div>
                <h6 className="text-[#C1C8E1] set_lato mb-2">
                  First name (optional)
                </h6>
                <div className="border-[1px] md:w-[336px] "></div>
              </div>
              <div className="mt-6 md:mt-0">
                <h6 className="w-[336px] text-[#C1C8E1] set_lato mb-2">
                  Last name
                </h6>
                <div className="border-[1px] "></div>
              </div>
            </div>

            <div className="md:py-10 py-6">
              <h6 className="w-[336px] text-[#C1C8E1] set_lato mb-2">
                Address
              </h6>
              <div className="border-[1px] "></div>
            </div>
            <div>
              <h6 className="w-[336px] text-[#C1C8E1] set_lato mb-2">
                Appaetnentment,suit,e.t.c (optinal)
              </h6>
              <div className="border-[1px] "></div>
            </div>
            <div className="md:mt-10 mt-6">
              <h6 className="w-[336px] text-[#C1C8E1] set_lato mb-2">City</h6>
              <div className="border-[1px] "></div>
            </div>

            <div className="md:flex justify-between">
              <div className="md:mt-10 mt-6">
                <h6 className="w-[336px] text-[#C1C8E1] set_lato mb-2">
                  Bangladesh
                </h6>
                <div className="border-[1px] "></div>
              </div>

              <div className="md:mt-10 mt-6">
                <h6 className="w-[336px] text-[#C1C8E1] set_lato mb-2">
                  Postal Code
                </h6>
                <div className="border-[1px] "></div>
              </div>
            </div>

            <button className="md:mt-28 mt-12 w-[182px] rounded-[2px] bg-[#FB2E86] h-[44px] text-white">
              Continue Shipping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
