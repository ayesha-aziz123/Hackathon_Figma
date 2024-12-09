import Image from "next/image"

const TopCategory = () => {
  return (
    <div className="max-w-[1920px] my-20 px-5 lg:px-10 xl:mx-40 ">
      {/* Title */}
      <h1 className="text-center text-[28px] sm:text-[32px] lg:text-[42px] font-[700] py-3 leading-[1.2] text-[#1A0B5B]">
        Top Categories
      </h1>

      <div className="flex flex-col gap-y-10">
        {/* Product Grid */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["c1", "c2", "c3", "c4"].map((img, index) => (
            <div
              key={index}
              className="w-full  lg:w-[270px] flex flex-col justify-center  items-center"
            >
              <div className="border_class w-[230px]  lg:w-[247px] p-10 lg:p-3   md:h-[269.96px] mx-auto rounded-[50%] bg-[#31208A0D]">
                <Image
                  src={`/TopCategory/${img}.png`}
                  width={2000}
                  height={2000}
                  alt={"chair"}
                  className="w-full lg:w-[178px] h-full object-contain mx-auto"
                />
              </div>
              <p className="text-xl py-3 text-[#151875] text-center">
                Mini LCW Chair
              </p>
              <div className="flex items-center gap-5">
                <p className="text-base text-[#151875]">$56.00</p>
              </div>
            </div>
          ))}
        </div>


        </div>
      </div>
  )
}

export default TopCategory
