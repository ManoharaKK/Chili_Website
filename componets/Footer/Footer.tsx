import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className='relative bg-gradient-to-r from-[#BF1D2E] via-[#BF1D2E] to-[#9a1625] text-white overflow-hidden'>
      <div className='relative max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-20'>
        {/* Logo Section */}
        <div className='mb-12 lg:mb-16'>
          <div className='flex items-center gap-3'>
            <div className='relative w-12 h-12 sm:w-14 sm:h-14'>
              <Image
                src="/Images/Home/Cartoonlogo.svg"
                alt="Mr Chilli Logo"
                fill
                className="object-contain"
              />
            </div>
            <h3 className='text-2xl sm:text-3xl font-bold text-white tracking-tight'>MR CHILLI</h3>
          </div>
        </div>

        {/* Navigation Links */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16'>
          {/* PAGES */}
          <div className='flex flex-col'>
            <h4 className='text-xs font-semibold text-white/60 uppercase tracking-[0.15em] mb-6'>
              PAGES
            </h4>
            <ul className='space-y-4'>
              <li>
                <Link href="/" className='text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2 group'>
                  <span className='text-white/50 group-hover:text-white transition-colors'>&gt;</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/About" className='text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2 group'>
                  <span className='text-white/50 group-hover:text-white transition-colors'>&gt;</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/Product" className='text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2 group'>
                  <span className='text-white/50 group-hover:text-white transition-colors'>&gt;</span>
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link href="/Quality" className='text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2 group'>
                  <span className='text-white/50 group-hover:text-white transition-colors'>&gt;</span>
                  <span>Our Process</span>
                </Link>
              </li>
              <li>
                <Link href="/Cetification" className='text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2 group'>
                  <span className='text-white/50 group-hover:text-white transition-colors'>&gt;</span>
                  <span>Certifications</span>
                </Link>
              </li>
              <li>
                <Link href="/Career" className='text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2 group'>
                  <span className='text-white/50 group-hover:text-white transition-colors'>&gt;</span>
                  <span>Careers</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className='flex flex-col'>
            <h4 className='text-xs font-semibold text-white/60 uppercase tracking-[0.15em] mb-6'>
              COMPANY
            </h4>
            <ul className='space-y-4'>
              <li>
                <Link href="/About" className='text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2 group'>
                  <span className='text-white/50 group-hover:text-white transition-colors'>&gt;</span>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link href="/Contactus" className='text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2 group'>
                  <span className='text-white/50 group-hover:text-white transition-colors'>&gt;</span>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/Career" className='text-sm text-white/80 hover:text-white transition-colors flex items-center gap-2 group'>
                  <span className='text-white/50 group-hover:text-white transition-colors'>&gt;</span>
                  <span>Careers</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Map Section - Right Corner */}
          <div className='flex flex-col w-full col-span-1 sm:col-span-2 lg:col-span-1'>
            <h4 className='text-xs font-semibold text-white/60 uppercase tracking-[0.15em] mb-6'>
              LOCATION
            </h4>
            <div className='w-full h-[240px] sm:h-[260px] md:h-[280px] rounded-lg overflow-hidden border border-white/20'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.904509683!2d79.852973!3d6.9271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTUnMzcuNiJOIDc5wrA1MScxMC43IkU!5e0!3m2!1sen!2slk!4v1234567890123!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-white/20 pt-8 pb-6'>
          <div className='flex flex-col md:flex-row md:justify-between items-center gap-3 md:gap-4'>
            {/* Footer Links */}
            <div className='flex flex-col sm:flex-col md:flex-row items-center gap-3 md:gap-6 text-xs text-white/60'>
              <a href="#" className='hover:text-white transition-colors uppercase tracking-wide'>
                PRIVACY POLICY
              </a>
              <a href="#" className='hover:text-white transition-colors uppercase tracking-wide'>
                TERMS OF USE
              </a>
              <a href="#" className='hover:text-white transition-colors uppercase tracking-wide'>
                NEWSLETTER
              </a>
            </div>

            {/* Copyright */}
            <p className='text-xs text-white/60 text-center md:text-left'>
              Copyright Mr Chilli, Inc. 2026. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer