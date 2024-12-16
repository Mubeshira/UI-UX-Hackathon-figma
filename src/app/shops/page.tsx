
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import NewHeader from '@/components/NewHeader';

function Shops() {
  return (
    <>
      <NewHeader />

{/* Category Section */}
<div className="w-full py-8">
  <div className="max-w-screen-lg mx-auto flex-wrap justify-center gap-4 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {['card-item', 'card-item1', 'card-item2', 'card-item3', 'card-item4'].map((item, index) => (
      <div 
        key={index} 
        className="flex justify-center"
      >
        <Image 
          src={`/${item}.png`} 
          alt={item} 
          width={205} 
          height={223} 
          className="w-[80px] exsm:w-[100px] xsm:w-[120px] sm:w-[150px] md:w-[180px] lg:w-[205px] h-auto" 
        />
      </div>
    ))}
  </div>
</div>



      {/* Popularity Section */}
      <div className="w-full py-6 bg-white">
        <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
          <p className="text-sm sm:text-base font-bold text-[#737373]">Showing all 12 results</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#737373]">Views:</span>
              <Image src="/frame.png" alt="frame" width={80} height={30} className="w-[50px] sm:w-[80px]" />
            </div>
            <button className="border border-[#DDDDDD] px-4 py-2 flex items-center text-sm text-[#737373]">
              Popularity <IoIosArrowDown className="ml-2" />
            </button>
            <button className="bg-[#23A6F0] text-white px-6 py-2 text-sm">Filter</button>
          </div>
        </div>
      </div>

      <Image 
  src="/desktop.png" 
  alt="clients" 
  width={1440} 
  height={80} 
  className="w-full h-auto sm:h-[80px] md:h-[100px] lg:h-[120px] xl:h-[140px]" 
/>


      {/* Product Cards */}
      <div className="w-full py-10">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image src={`/pic${index + 1}.png`} alt={`Product ${index + 1}`} width={238} height={488} className="w-full max-w-[200px] rounded-lg" />
              <h3 className="font-bold text-lg text-gray-800 mt-4">Graphic Design</h3>
              <h6 className="font-medium text-sm text-gray-600">English Department</h6>
              <p className="font-normal text-sm text-gray-800">$16.48 $6.48</p>
              <Image src="/col.png" alt="Rating" width={82} height={16} className="mt-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-8">
        <div className="flex border border-[#BDBDBD] rounded-md shadow-md">
          {['First', '1', '2', '3', 'Next'].map((item, index) => (
            <div
              key={index}
              className={`px-4 py-2 ${index === 2 ? 'bg-[#23A6F0] text-white' : 'bg-[#F3F3F3] text-[#23A6F0]'}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <section className="py-6">
          <div className="max-w-screen-lg mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold text-[#252b42]">Bandage</h1>
            <div className="flex gap-4">
              <FaFacebookF color="blue" />
              <FaInstagram color="blue" />
              <FaTwitter color="blue" />
            </div>
          </div>
        </section>
        <div className="border-t border-[#e6e6e6]" />
        <section className="py-10">
          <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
            {[
              { title: 'Company Info', links: ['About Us', 'Careers', 'We Are Hiring', 'Blog'] },
              { title: 'Legal', links: ['Terms of Service', 'Privacy Policy', 'Cookies', 'Refund Policy'] },
              { title: 'Features', links: ['Business Marketing', 'User Analytics', 'Live Chat', 'Unlimited Support'] },
              { title: 'Resources', links: ['iOS & Android', 'Watch a Demo', 'Customers', 'API'] },
              {
                title: 'Get In Touch',
                content: (
                  <>
                    <div className="relative">
                      <input
                        type="email"
                        className="w-full border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] px-4 py-2 text-sm"
                        placeholder="Your Email"
                      />
                      <button className="absolute right-0 top-0 bg-[#23A6F0] text-white px-4 py-2 rounded-r-lg">
                        Subscribe
                      </button>
                    </div>
                    <p className="text-xs text-[#727272] mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </>
                ),
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h2 className="text-base font-bold text-[#252b42]">{section.title}</h2>
                {section.links ? (
                  <nav className="flex flex-col gap-2 mt-3">
                    {section.links.map((link, i) => (
                      <a key={i} href="#" className="text-sm font-bold text-[#727272]">
                        {link}
                      </a>
                    ))}
                  </nav>
                ) : (
                  section.content
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="bg-[#f9f9f9] py-4">
          <div className="max-w-screen-lg mx-auto flex justify-between items-center px-4">
            <p className="text-sm font-bold text-[#727272]">
              Made with love by Finland. All rights reserved.
            </p>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Shops;



