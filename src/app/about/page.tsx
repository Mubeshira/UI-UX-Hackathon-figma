

import Header2 from '@/components/Header2';
import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaFacebookF, FaInstagram, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import Footer from '@/components/Footer';


function AboutUs() {
  return (
    <>
      <div>
        {/* Header Section */}
        <div className='flex flex-col items-center'>
          <Header2 />

          {/* About Section */}
          <div className='mt-8 sm:mt-12 w-full max-w-[1050px] px-4 sm:px-8'>
            <div className='flex flex-col md:flex-row items-center gap-6 md:gap-8'>
              {/* Text Column */}
              <div className='flex flex-col gap-6 md:gap-8 max-w-lg'>
                <h5 className='text-sm sm:text-base font-semibold text-[#252B42]'>ABOUT COMPANY</h5>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[#252B42]'>ABOUT US</h1>
                <h4 className='text-sm sm:text-base md:text-lg text-[#737373]'>
                  We know how large objects will act, but things on a small scale
                </h4>
                <div>
                  <button className='bg-[#23A6F0] text-white text-sm sm:text-base font-bold px-6 py-3 rounded'>
                    Get Quote Now
                  </button>
                </div>
              </div>

              {/* Image Column */}
              <div className='relative max-w-full'>
                <Image
                  src='/girl.png'
                  alt='Girl'
                  width={900}
                  height={500}
                  className='w-full h-auto rounded-md'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Problems Section */}
        <div className='flex flex-col md:flex-row items-center mt-12 md:mt-16 px-4 sm:px-8 max-w-[1050px] mx-auto'>
          {/* Left Column */}
          <div className='flex flex-col gap-4 md:gap-6 max-w-md'>
            <p className='text-sm sm:text-base font-medium text-[#E74040]'>Problems trying</p>
            <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-[#252B42]'>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </h2>
          </div>

          {/* Right Column */}
          <div className='mt-6 md:mt-0 md:ml-8 text-sm sm:text-base text-[#737373]'>
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </div>
        </div>

        {/* Metrics Section */}
        <section className='bg-white py-12 md:py-16'>
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-[1050px] mx-auto px-4'>
            {[
              { label: 'Happy Customers', value: '15K' },
              { label: 'Monthly Visitors', value: '150K' },
              { label: 'Countries Worldwide', value: '15' },
              { label: 'Top Partners', value: '100+' },
            ].map((metric, index) => (
              <div key={index} className='flex flex-col items-center'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800'>{metric.value}</h1>
                <p className='text-sm sm:text-base font-medium text-gray-500'>{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Picture Section */}
        <section className='relative bg-white py-12 md:py-16'>
          <div className='relative max-w-[1050px] mx-auto'>
            <div className='relative w-full h-[300px] sm:h-[400px] md:h-[540px] bg-white rounded-2xl shadow-lg'>
              <Image
                src='/bg.png'
                alt='Background'
                layout='fill'
                objectFit='cover'
                className='rounded-2xl'
              />
              <div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/90 rounded-2xl'></div>
              <div className='absolute inset-0 flex justify-center items-center'>
                <button className='w-[60px] sm:w-[80px] md:w-[92.6px] h-[60px] sm:h-[80px] md:h-[92.6px] bg-[#23A6F0] rounded-full flex justify-center items-center shadow-md hover:scale-110 transition-transform'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='white'
                    className='w-4 h-5 sm:w-5 sm:h-6'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M5 3l14 9-14 9V3z' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className='w-[1440px] h-[826px]  flex justify-center'>
          <div className='w-[1050px] h-[819px] flex justify-center  '>
            <div className='flex justify-center flex-col items-center '>
              <div className='flex justify-center flex-col items-center w-[607px] bg-white h-[100px] mt-[112px] mb-[212px] font-Montserrat text-[14px]  text-[#737373 mt-[10px]] '>
                <h1 className='text-[40px] font-bold text-[#252B42]'>Meet Our Team</h1>
                <pre>Problems trying to resolve the conflict between </pre>
                <pre> the two major realms of Classical physics: Newtonian mechanics </pre>



              </div>
              <div className=' w-[1034px] h-[383px] mb-[112px] gap-[30px] grid grid-cols-3'>
                <div className='w-[329px] h-[383px] flex justify-center flex-col items-center '>
                  <Image src={"/orangegirl.jpg"} alt='orange' width={329} height={383}></Image>
                  <h1 className='mt-[30px] font-bold text-[#252B42]'>Username</h1>
                  <p className='text-[14px] text-[#737373] '>Profession</p>
                  <div className='w-[112px] h-[24px]  flex gap-[20px] text-[#23A6F0] mt-[10px] ml-4 mb-[30px]'>
                    <FaFacebook />
                    <FaInstagramSquare />
                    <FaTwitter />

                  </div>
                </div>
                <div className='w-[329px] h-[383px] flex justify-center flex-col items-center '>
                  <Image src={"/redgirl.png"} alt='orange' width={329} height={383}></Image>
                  <h1 className='mt-[30px] font-bold text-[#252B42]'>Username</h1>
                  <p className='text-[14px] text-[#737373] '>Profession</p>
                  <div className='w-[112px] h-[24px]  flex gap-[20px] text-[#23A6F0] mt-[10px] ml-4 mb-[30px]'>
                    <FaFacebook />
                    <FaInstagramSquare />
                    <FaTwitter />

                  </div>
                </div>
                <div className='w-[329px] h-[383px] flex justify-center flex-col items-center '>
                  <Image src={"/boymobile.jpg"} alt='orange' width={329} height={383}></Image>
                  <h1 className='mt-[30px] font-bold text-[#252B42]'>Username</h1>
                  <p className='text-[14px] text-[#737373] '>Profession</p>
                  <div className='w-[112px] h-[24px]  flex gap-[20px] text-[#23A6F0] mt-[10px] ml-4 mb-[30px]'>
                    <FaFacebook />
                    <FaInstagramSquare />
                    <FaTwitter />

                  </div>
                </div>



              </div>
            </div>

          </div>
        </div>
        <div className='w-[1440px] h-[479px]  flex justify-center '>
          <div className='w-[1050px] h-[479px] flex justify-center items-center flex-col'>
            <div className='flex justify-center flex-col items-center w-[607px]  h-[100px] mt-[83px]  font-Montserrat text-[14px]  text-[#737373 mt-[10px]] '>
              <h1 className='text-[40px] font-bold text-[#252B42] '>Big Companies Are Here</h1>
              <pre className='font-Montserrat text-[14px] text-[#737373] '>Problems trying to resolve the conflict between </pre>
             <pre className='font-Montserrat text-[14px] text-[#737373] '> the two major realms of Classical physics: Newtonian mechanics </pre>
           
            </div>
            <Image className='mt-[24px]' src={"/desktop.png"} alt='imgs' width={1054} height={175}></Image>
          </div>
          
        </div>
        {/* footer */}
        <Footer/>
         
      </div>
    </>
  );
}

export default AboutUs;
