
import React from 'react';
import Image from 'next/image';

function EditorsPick() {
  return (
    <>
      <div className="w-full min-h-[770px] bg-[#FAFAFA] flex justify-center flex-col px-4 xsm:px-6 sm:px-8">
        <div className="mt-8 xsm:mt-10 sm:mt-[80px]">
          {/* Header Section */}
          <div className="w-full text-center max-w-lg md:max-w-xl mx-auto">
            <h3 className="font-Montserrat text-base xsm:text-lg sm:text-2xl lg:text-3xl text-[#252B42] font-semibold leading-6 sm:leading-[32px]">
              Editors Pick
            </h3>
            <p className="mt-2 text-sm xsm:text-base sm:text-base font-Montserrat text-[#252B42]">
              Problems trying to resolve the conflict between
            </p>
          </div>

          {/* Images Section */}
          <div className="mt-10 xsm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xsm:gap-6">
            {/* Men Image */}
            <div className="relative w-full aspect-[5/6] xsm:aspect-[4/5] md:aspect-[10/12]">
              <Image 
                src="/img1.png" 
                alt="image1" 
                layout="fill" 
                objectFit="cover" 
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 xsm:px-6 sm:px-10 py-2 font-Montserrat font-bold text-[#252B42] leading-6 hover:bg-gray-100">
                MEN
              </button>
            </div>

            {/* Women Image */}
            <div className="relative w-full aspect-[4/5] xsm:aspect-[10/12]">
              <Image 
                src="/img2.png" 
                alt="women" 
                layout="fill" 
                objectFit="cover" 
              />
              <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 xsm:px-6 py-2 font-Montserrat font-bold text-[#252B42] leading-6 hover:bg-gray-100">
                WOMEN
              </button>
            </div>

            {/* Accessories and Kids Section */}
            <div className="grid grid-cols-1 gap-4 h-auto w-full lg:h-[500px] lg:w-[240px]">
              {/* Accessories */}
              <div className="relative w-full aspect-[4/5] xsm:aspect-[10/12]">
                <Image
                  src="/img3.png"
                  alt="accessories"
                  objectFit="cover"
                  layout="responsive"
                  width={240}
                  height={242}
                />
                {/* Uncomment the button below if needed */}
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 xsm:px-6 py-2 font-Montserrat font-bold text-[#252B42] leading-6 hover:bg-gray-100">
                  ACCESSORIES
                </button>
              </div>

              {/* Kids */}
              <div className="relative w-full aspect-[4/5] xsm:aspect-[10/12]">
                <Image
                  src="/img4.png"
                  alt="kids"
                  objectFit="cover"
                  layout="responsive"
                  width={240}
                  height={242}
                />
                {/* Uncomment the button below if needed */}
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 xsm:px-6 py-2 font-Montserrat font-bold text-[#252B42] leading-6 hover:bg-gray-100">
                  KIDS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditorsPick;
