"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/About' },
    { name: 'Products', href: '/Product' },
    { name: 'Our Process', href: '/Quality' },
    { name: 'Certifications', href: '/Cetification' },
    { name: 'Careers', href: '/Career' },
    { name: 'Contact us', href: '/Contactus' }
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className='fixed top-0 left-0 right-0 z-[9999] bg-white w-full py-2 sm:py-2 md:py-2 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-4 '>
      <div className='px-0 sm:px-5 md:px-0 lg:px-5 xl:px-10 2xl:px-10 mx-auto flex items-center justify-between'>
        {/* Logo Section */}
        <Link href="/" className='flex items-center gap-3 hover:opacity-80 transition-opacity'>
          <div className='relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16'>
            <Image
              src="/Images/Home/Cartoonlogo.svg"
              alt="Mr Chilli Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Navigation Links */}
        <div className='hidden lg:flex items-center gap-4 xl:gap-6'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs xl:text-sm transition-colors duration-200 font-medium whitespace-nowrap ${
                  isActive 
                    ? 'text-[#BF1D2E]' 
                    : 'text-gray-800 hover:text-[#BF1D2E]'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className='md:hidden flex flex-col gap-1.5 p-2 relative'
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Right Side - Red Circles */}
        <div className='hidden md:flex items-center gap-1'>
          <div className='w-10 h-10 sm:w-12 sm:h-12 bg-[#BF1D2E] rounded-full'></div>
          <div className='w-5 h-10 sm:w-6 sm:h-12 bg-[#BF1D2E] rounded-r-full'></div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-[9998]'>
          <div className='flex flex-col py-4'>
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`px-6 py-3 text-base transition-colors duration-200 font-medium ${
                    isActive
                      ? 'text-[#BF1D2E] bg-gray-50'
                      : 'text-gray-800 hover:text-[#BF1D2E] hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
// test
export default Navbar