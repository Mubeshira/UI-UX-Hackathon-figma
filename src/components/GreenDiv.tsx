

import Image from "next/image";

export default function Classic() {
  return (
    <div className="w-full rounded-[5px] bg-[#23856D] mt-[130px] border">
      <div className="w-full h-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[80px] px-4 sm:px-8 lg:px-16 xl:px-32 py-16">
          {/* Left Section */}
          <div className="flex flex-col gap-6 lg:gap-8">
            <h4 className="text-white text-[16px] sm:text-[18px] lg:text-[20px] font-Montserrat font-normal leading-[30px]">
              SUMMER 2020
            </h4>
            <h1 className="text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[58px] font-Montserrat font-bold leading-[40px] sm:leading-[50px] md:leading-[60px] lg:leading-[80px]">
              Vita Classic Product
            </h1>
            <p className="text-white text-[14px] md:text-[16px] font-Montserrat font-medium leading-[20px] md:leading-[24px] max-w-[400px]">
              We know how large objects will act. We know how our objects will
              act. We know.
            </p>
            <div className="flex items-center gap-4">
              <h3 className="text-white text-[24px] font-Montserrat font-bold">
                $16.48
              </h3>
              <button className="bg-[#2DC071] hover:bg-green-400 text-white rounded-[5px] px-6 py-3 text-[14px] font-Montserrat font-bold">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-auto flex justify-center mt-8 lg:mt-0">
            <Image
              src={"/heroo.png"}
              alt="Classic Product Image"
              width={400}
              height={300}
              className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
