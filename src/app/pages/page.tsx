

import NewHeader from '@/components/NewHeader';
import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image';
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

function Pages() {
  return (
    <>
      <div>
        <NewHeader />
        {/* Breadcrumb Section */}
        <div className="w-full h-auto py-4 bg-[#FAFAF2] flex justify-center items-center">
          <div className="w-full max-w-6xl px-4 flex items-center gap-4">
            <div className="font-Montserrat font-bold text-sm sm:text-base text-[#252B42]">
              Home
            </div>
            <MdOutlineKeyboardArrowRight />
            <h6 className="font-Montserrat font-bold text-sm sm:text-base text-[#BDBDBD]">
              Shop
            </h6>
          </div>
        </div>

        {/* Product Section */}
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 font-Montserrat">
          {/* Left Section - Image Slider */}
          <div className="flex-1">
            <div className="relative mx-auto max-w-md sm:max-w-lg">
              <Image
                src={"/yellowsofa.jpg"}
                alt="Product Image"
                className="rounded-lg"
                width={600}
                height={400}
              />
              {/* Arrows */}
              <button className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            {/* Thumbnails */}
            <div className="flex mt-4 gap-4 justify-center">
              <Image
                src={"/greysofa.jpg"}
                alt="Thumbnail 1"
                className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
                width={100}
                height={100}
              />
              <Image
                src={"/yellowsofa.jpg"}
                alt="Thumbnail 2"
                className="rounded-md cursor-pointer hover:ring-2 hover:ring-blue-500"
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="flex-1">
            {/* Product Title and Rating */}
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Floating Phone
            </h1>
            <div className="flex items-center mt-2">
              <span className="flex items-center text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
                  </svg>
                ))}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-gray-300"
                >
                  <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
                </svg>
              </span>
              <p className="ml-2 text-sm text-gray-500">(10 Reviews)</p>
            </div>

            {/* Price and Availability */}
            <p className="text-lg sm:text-xl font-Montserrat font-semibold text-black mt-4">
              $1,139.33
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Availability: <span className="text-[#23A6F0] font-medium">In Stock</span>
            </p>

            {/* Description */}
            <p className="text-gray-700 mt-4 text-sm sm:text-base">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent door ENIM RELIT Mollie. Excitation venial
              consequent sent nostrum met.
            </p>

            {/* Color Options */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-700">Color:</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="h-6 w-6 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"></span>
                <span className="h-6 w-6 rounded-full bg-green-500 border border-gray-300 cursor-pointer"></span>
                <span className="h-6 w-6 rounded-full bg-orange-500 border border-gray-300 cursor-pointer"></span>
                <span className="h-6 w-6 rounded-full bg-black border border-gray-300 cursor-pointer"></span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex items-center gap-4">
              <button className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600">
                Select Options
              </button>
              <div className="flex items-center gap-4">
                <CiHeart />
                <CiShoppingCart />
                <FaEye />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pages;
