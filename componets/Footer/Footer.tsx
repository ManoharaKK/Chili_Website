"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

function Footer() {
  const pathname = usePathname()

  const companyLinks = [
    { name: 'About Us', href: '/About' },
    { name: 'Our Process', href: '/Quality' },
    { name: 'Careers', href: '/Career' },
    { name: 'Contact Us', href: '/Contactus' }
  ]

  const productLinks = [
    { name: 'Products', href: '/Product' },
    { name: 'Certifications', href: '/Cetification' }
  ]

  const legalLinks = [
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' }
  ]

  return (
    <div className=' pt-10 lg:pt-20 mt-10 lg:mt-20'>
    <footer className="relative bg-gradient-to-b from-[#BF1D2E] via-[#BF1D2E] to-[#9a1625] text-white ">
      {/* Large MR CHILI text - top right, half visible */}
      <div className="pointer-events-none absolute top-0 right-0 flex items-start justify-end -translate-y-1/2 z-0">
        <p
          className="text-[60px] sm:text-[120px] md:text-[130px] lg:text-[180px] xl:text-[200px] 2xl:text-[300px] font-extrabold uppercase tracking-tight select-none leading-none"
          style={{
            color: '#BF1D2E',
            WebkitTextStroke: '2px #BF1D2E',
            paintOrder: 'stroke fill',
          }}
        >
          MR CHILI
        </p>
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className='flex items-center gap-2 md:block' >
            <Link href="/" className="inline-block">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-30 md:h-30 lg:w-40 lg:h-40">
                <Image
                  src="/Images/Home/Cartoonlogo.svg"
                  alt="Mr Chilli Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">MR CHILLI</h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Premium quality spices and chili products for your culinary excellence.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 uppercase tracking-wider text-white/90">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-all duration-200 hover:text-white hover:translate-x-1 inline-block ${
                        isActive
                          ? 'text-white font-medium'
                          : 'text-white/70'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 uppercase tracking-wider text-white/90">
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-all duration-200 hover:text-white hover:translate-x-1 inline-block ${
                        isActive
                          ? 'text-white font-medium'
                          : 'text-white/70'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Legal & Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 uppercase tracking-wider text-white/90">
              Legal
            </h4>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-all duration-200 hover:text-white hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Back to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-200 text-sm"
            >
              <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60 text-center sm:text-left">
              © 2026 Mr Chilli. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/30">•</span>
              <Link href="/Contactus" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
