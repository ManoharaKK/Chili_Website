"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <div className='pt-10 lg:pt-20 mt-10 lg:mt-20'>
      <footer className="bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          {/* Main Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Company Info */}
            <div>
              <Link href="/" className="inline-block mb-4 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 group-hover:scale-110 transition-transform">
                    <Image
                      src="/Images/Home/Cartoonlogo.svg"
                      alt="Mr Chilli Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">MR CHILLI</h3>
                </div>
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Premium quality spices and chili products for your culinary excellence.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white hover:text-[#BF1D2E] transition-colors text-sm">Home</Link>
                </li>
                <li>
                  <Link href="/About" className="text-white hover:text-[#BF1D2E] transition-colors text-sm">About Us</Link>
                </li>
                <li>
                  <Link href="/Product" className="text-white hover:text-[#BF1D2E] transition-colors text-sm">Products</Link>
                </li>
                <li>
                  <Link href="/Quality" className="text-white hover:text-[#BF1D2E] transition-colors text-sm">Our Process</Link>
                </li>
                <li>
                  <Link href="/Cetification" className="text-white hover:text-[#BF1D2E] transition-colors text-sm">Certifications</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-white">
                  <span className="text-gray-400">Phone:</span> +94 77 123 4567
                </li>
                <li className="text-white">
                  <span className="text-gray-400">Email:</span> hello@mrchilli.lk
                </li>
                <li className="text-white mt-4">
                  <span className="text-gray-400">Location:</span>
                  <br />
                  23 Spice Avenue
                  <br />
                  Colombo 03, Sri Lanka
                </li>
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-400">More</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/Career" className="text-white hover:text-[#BF1D2E] transition-colors text-sm">Careers</Link>
                </li>
                <li>
                  <Link href="/Contactus" className="text-white hover:text-[#BF1D2E] transition-colors text-sm">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
              <p>© 2026 Mr Chilli. All rights reserved.</p>
              <p>
                Designed by{' '}
                <a 
                  href="https://sphiriadigital.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#BF1D2E] transition-colors"
                >
                  Sphiria Digital
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Large MR CHILI text section - separate below footer */}
        <div className="bg-[#1a1a1a] relative overflow-hidden py-8 sm:py-12">
          <div className="flex items-center justify-center">
            <p
              className="text-[80px] sm:text-[150px] md:text-[200px] lg:text-[280px] xl:text-[350px] 2xl:text-[420px] font-extrabold uppercase tracking-tighter select-none whitespace-nowrap"
              style={{
                color: '#ffffff',
                opacity: 0.15,
                lineHeight: '1',
              }}
            >
              MR C<span style={{ color: '#BF1D2E' }}>H</span>ILI
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
