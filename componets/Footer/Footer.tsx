import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div>
    <footer className=' bg-[#BF1D2E] text-white px-10 sm:px-10 md:px-10 lg:px-20 xl:px-20 2xl:px-20'>
      <div className='grid-container  mx-auto  py-12 lg:py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12'>
          {/* Left Side - Logo and Description */}
          <div className='lg:col-span-2'>
            {/* Logo */}
            <div className='flex items-center gap-3 mb-6'>
              <div className='relative w-16 h-16 sm:w-20 sm:h-20'>
                <Image
                  src="/Images/Home/Cartoonlogo.svg"
                  alt="Mr Chilli Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className='text-2xl sm:text-3xl font-bold text-white'>Mr Chilli</h3>
            </div>
            
            {/* Description */}
            <p className='text-sm sm:text-base text-white/90 mb-6 leading-relaxed max-w-md'>
              EASILY SEARCH AND BOOK DOMESTIC AND INTERNATIONAL FLIGHTS WITH REAL-TIME AVAILABILITY.
            </p>
            
            {/* Phone Number */}
            <p className='text-sm sm:text-base text-white font-medium'>
              +94 76 90 61 30
            </p>
          </div>

          {/* Right Side - Navigation Columns */}
          <div className='lg:col-span-3'>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8'>
              {/* COMPANY */}
              <div>
                <h4 className='text-base sm:text-lg font-semibold mb-4 text-white'>COMPANY</h4>
                <ul className='space-y-3'>
                  <li><a href="#" className='text-sm sm:text-base text-white/80 hover:text-white transition-colors'>About Us</a></li>
                  <li><a href="#" className='text-sm sm:text-base text-white/80 hover:text-white transition-colors'>Our Team</a></li>
                  <li><a href="#" className='text-sm sm:text-base text-white/80 hover:text-white transition-colors'>Careers</a></li>
                  <li><a href="#" className='text-sm sm:text-base text-white/80 hover:text-white transition-colors'>News & Blogs</a></li>
                </ul>
              </div>

              {/* PROPERTIES */}
              <div>
                <h4 className='text-base sm:text-lg font-semibold mb-4 text-white'>PROPERTIES</h4>
                <ul className='space-y-3'>
                  <li><a href="#" className='text-sm sm:text-base text-white/80 hover:text-white transition-colors'>Sample</a></li>
                  <li><a href="#" className='text-sm sm:text-base text-white/80 hover:text-white transition-colors'>Sample</a></li>
                  <li><a href="#" className='text-sm sm:text-base text-white/80 hover:text-white transition-colors'>Sample</a></li>
                  <li><a href="#" className='text-sm sm:text-base text-white/80 hover:text-white transition-colors'>Sample</a></li>
                </ul>
              </div>

              {/* SERVICES */}
              <div>
                <h4 className='text-base sm:text-lg font-semibold mb-4 text-white'>SERVICES</h4>
                <ul className='space-y-3'>
                  <li><a href="#" className='text-sm sm:text-base text-white/80 hover:text-white transition-colors'>Sample</a></li>
                  <li><a href="#" className='text-sm sm:text-base text-white/80 hover:text-white transition-colors'>Sample</a></li>
                  <li><a href="#" className='text-sm sm:text-base text-white/80 hover:text-white transition-colors'>Sample</a></li>
                  <li><a href="#" className='text-sm sm:text-base text-white/80 hover:text-white transition-colors'>Sample</a></li>
                </ul>
              </div>

              {/* SUPPORT */}
              <div>
                <h4 className='text-base sm:text-lg font-semibold mb-4 text-white'>SUPPORT</h4>
                <ul className='space-y-3'>
                  <li><a href="#" className='text-sm sm:text-base text-white/80 hover:text-white transition-colors'>Contact Us</a></li>
                  <li><a href="#" className='text-sm sm:text-base text-white/80 hover:text-white transition-colors'>FAQ</a></li>
                  <li><a href="#" className='text-sm sm:text-base text-white/80 hover:text-white transition-colors'>Privacy Policy</a></li>
                  <li><a href="#" className='text-sm sm:text-base text-white/80 hover:text-white transition-colors'>Terms Of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-300/30 mt-8 lg:mt-12 pt-6 lg:pt-8'>
          {/* Copyright */}
          <p className='text-center text-sm sm:text-base text-white/80'>
            © 2026 SPHIRIA DIGITAL. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
    <div className='relative mt-[-20px] sm:mt-[-40px] md:mt-[-50px] lg:mt-[-50px] xl:mt-[-70px] 2xl:mt-[-70px] overflow-hidden z-[-1]'>
        <h1 className='text-[50px] sm:text-[80px]  md:text-[100px] lg:text-[150px] xl:text-[180px] 2xl:text-[200px] text-[#BF1D2E] leading-none'>
            MR CHILLI
        </h1>
    </div>
    </div>
  )
}

export default Footer