"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Footer() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/About' },
    { name: 'Products', href: '/Product' },
    { name: 'Our Process', href: '/Quality' },
    { name: 'Certifications', href: '/Cetification' },
    { name: 'Careers', href: '/Career' },
    { name: 'Contact Us', href: '/Contactus' }
  ]

  return (
    <footer className="relative bg-gradient-to-r from-[#BF1D2E] via-[#BF1D2E] to-[#9a1625] text-white ">
      {/* Big brand text - anchored to bottom, with horizontal blur lines like reference */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-center translate-y-1/2 overflow-hidden">
        <div className="relative">
          {/* Base text */}
          <p
            className="text-[66px] sm:text-[140px] md:text-[150px] lg:text-[160px] xl:text-[220px] font-extrabold uppercase tracking-tight text-white/20 select-none leading-none"
            style={{
              WebkitTextStroke: '2px #BF1D2E',
              paintOrder: 'stroke fill',
            }}
          >
            MR CHILI
          </p>

          {/* Horizontal motion-blur style lines across the bottom half */}
          <div
            className="absolute inset-x-[-15%] bottom-[-10%] h-1/2 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.35)_0,rgba(255,255,255,0.35)_2px,transparent_2px,transparent_8px)] opacity-70 blur-sm"
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 space-y-8 sm:space-y-10 md:space-y-12">
        {/* Top row: Terms / Copyright / Privacy */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 text-[9px] sm:text-[10px] md:text-xs text-white/70">
          <Link
            href="#"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Terms &amp; Conditions
          </Link>

          <p className="text-center text-white/70 text-[9px] sm:text-[10px] md:text-xs whitespace-nowrap">
            © 2026, Mr Chilli, All Rights Reserved.
          </p>

          <Link
            href="#"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Bottom pill navigation bar – uses main nav titles, highlights current page */}
        <div className="flex flex-col items-center px-2 sm:px-0">
          {/* Toggle button for small and medium screens */}
          <div className="lg:hidden w-full max-w-xs relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-full flex items-center justify-between rounded-full bg-black/70 border border-white/10 px-4 py-2.5 backdrop-blur-md text-white/80 hover:text-white transition-colors duration-200"
            >
              <span className="text-xs font-medium">Navigation Menu</span>
              <span className={`text-lg transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>

            {/* Dropdown menu */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl bg-black/90 border border-white/10 backdrop-blur-md shadow-lg overflow-hidden z-50 animate-fade-in">
                <div className="flex flex-col py-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`px-4 py-2.5 text-sm transition-colors duration-200 ${
                          isActive
                            ? 'bg-gradient-to-r from-[#BF1D2E] to-[#E83A4B] text-white'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Navigation links - always visible on large screens */}
          <div className="hidden lg:block w-full max-w-4xl">
            <div className="mx-auto flex flex-wrap items-center justify-center gap-2 md:gap-3 lg:gap-4 rounded-full bg-black/70 border border-white/10 px-4 md:px-6 lg:px-8 py-3 md:py-4 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`whitespace-nowrap text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-colors duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-[#BF1D2E] to-[#E83A4B] text-white'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <div className="flex justify-center sm:justify-end px-2 sm:px-0">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#BF1D2E] text-white text-[10px] sm:text-xs md:text-sm px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 hover:-translate-y-0.5 transition-transform duration-200"
          >
            <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full bg-white text-[#BF1D2E] text-[9px] sm:text-[10px]">
              ↑
            </span>
            <span className="hidden xs:inline">Back to Top</span>
            <span className="xs:hidden">Top</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer