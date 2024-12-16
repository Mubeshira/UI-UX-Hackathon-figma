

import React from 'react';
import Image from 'next/image';

function ProductCard() {
  return (
    <>
      <div className="w-full flex justify-center px-4 sm:px-8">
        <div className="w-full max-w-[1124px] py-10 sm:py-20 flex flex-col gap-10 sm:gap-20">
          {/* Text Section */}
          <div className="w-full flex flex-col gap-2.5 justify-center items-center text-center">
            <h4 className="font-Montserrat font-normal text-sm sm:text-lg text-gray-500">
              Featured Products
            </h4>
            <h3 className="font-Montserrat font-bold text-xl sm:text-2xl lg:text-3xl text-gray-800">
              BESTSELLER PRODUCTS
            </h3>
            <p className="font-Montserrat font-normal text-xs sm:text-sm text-gray-500">
              Problems trying to resolve the conflict between
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {[1, 2, 5, 4, 5, 6, 7, 8].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={`/pic${item}.png`}
                  alt={`Product ${item}`}
                  width={239}
                  height={472}
                  className="rounded-lg object-cover"
                />
                <div className="flex flex-col items-center text-center mt-4">
                  <h3 className="font-Montserrat font-bold text-base sm:text-lg text-gray-800">
                    Graphic Design
                  </h3>
                  <h6 className="font-Montserrat font-medium text-sm text-gray-600">
                    English Department
                  </h6>
                  <pre className="font-Montserrat font-normal text-sm text-gray-800">
                    $16.48     $6.48
                  </pre>
                  <Image
                    src="/col.png"
                    alt="Rating"
                    width={82.23}
                    height={16}
                    className="mt-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
