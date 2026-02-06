"use client";
import React from 'react'
import Link from 'next/link'

function WppButton() {
  return (
    <div>
            <div className='Button'>
                <Link href="/Kontakt" className='flex gap-2 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 group hover:gap-5 sm:hover:gap-6 md:hover:gap-8 lg:hover:gap-8 xl:hover:gap-9 transition-all duration-300'>
                    <div>
                        <button className="bg-[#16A249] backdrop-blur-sm text-white outline outline-2 outline-[#16A249] outline-offset-2 h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] px-6 sm:px-6 md:px-8 lg:px-10 xl:px-12 rounded-full text-xs sm:text-xs md:text-sm lg:text-base xl:text-base flex items-center justify-center transition-all duration-300 group-hover:bg-[#16A249]/80 group-hover:backdrop-blur-md group-hover:scale-105 group-hover:outline-[#16A249]/80">
                        Start Chat
                        </button>
                    </div>

                    <div className='flex gap-2 sm:gap-2 md:gap-1.5 lg:gap-2 xl:gap-2 group-hover:gap-2.5 sm:group-hover:gap-2.5 md:group-hover:gap-2.5 lg:group-hover:gap-3 xl:group-hover:gap-3 transition-all duration-300'>
                        <button className="bg-[#16A249] backdrop-blur-sm aspect-square h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] rounded-full flex items-center justify-center outline outline-2 outline-[#16A249] outline-offset-2 transition-all duration-300 group-hover:bg-[#16A249]/80 group-hover:backdrop-blur-md group-hover:scale-110 group-hover:outline-[#16A249]/80">
                        </button>
                        <button className="bg-[#16A249] backdrop-blur-sm aspect-[3/6] h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] rounded-r-full flex items-center justify-center outline outline-2 outline-[#16A249]  transition-all duration-300 group-hover:bg-[#16A249]/80 group-hover:backdrop-blur-md group-hover:scale-110 group-hover:outline-[#16A249]/80">
                        </button>
                    </div>
                </Link>
            </div>
        </div>
  )
}

export default WppButton