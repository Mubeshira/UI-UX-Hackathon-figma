
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from 'next/link';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Header top */}
      <div className='w-full h-[58px] bg-[#252B42]'>
        <div className="flex justify-between items-center w-full h-full px-4 lg:px-6">
          {/* Left section: Contact Info */}
          <div className="hidden md:flex gap-4">
            <button className="flex items-center gap-2 text-white">
              <Image src="/phone.png" alt="phone" width={16} height={16} />
              <span className="font-Montserrat font-semibold text-sm">(225) 555-0118</span>
            </button>
            <button className="flex items-center gap-2 text-white">
              <Image src="/email.png" alt="mail" width={16} height={16} />
              <span className="font-Montserrat text-sm">michelle.rivera@example.com</span>
            </button>
          </div>

          {/* Center section: Follow Us */}
          <h6 className="hidden md:block font-Montserrat font-semibold text-sm text-white">
            Follow Us and get a chance to win 80% off
          </h6>

          {/* Right section: Social Icons */}
          <div className="flex gap-4 items-center">
            <h6 className="hidden md:block font-Montserrat text-sm text-white">Follow Us:</h6>
            <div className="flex gap-4">
              <FaInstagram color='white' />
              <FaYoutube color='white' />
              <FaFacebookF color='white' />
              <FaTwitter color='white' />
            </div>
          </div>
        </div>
      </div>

      {/* Header bottom */}
      <div className="w-full bg-white shadow-md">
        <div className="flex justify-between items-center w-full h-[68px] px-4 lg:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <h3 className="font-Montserrat font-semibold text-2xl">Bandage</h3>
          </div>

          {/* Toggle Button for Sidebar */}
          <button
            className="block md:hidden text-black"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <ul className="flex gap-6 font-Montserrat font-semibold text-sm text-gray-600">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shops">Shop</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/pages">Pages</Link></li>
            </ul>
            <div className="flex gap-4 items-center">
              <Link href="/login">
                <span className="font-Montserrat text-blue-500 font-semibold">Login / Register</span>
              </Link>
              <Image src="/search.png" alt="search" width={16} height={16} />
              <Image src="/cart.png" alt="cart" width={16} height={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-3/4 max-w-xs h-full bg-white shadow-lg z-50 p-6">
          <button
            className="absolute top-4 right-4 text-black"
            onClick={() => setIsSidebarOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col gap-4 font-Montserrat font-semibold text-gray-700 mt-10">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shops">Shops</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/pages">Pages</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;

