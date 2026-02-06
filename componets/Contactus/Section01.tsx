import React from 'react'
import Image from 'next/image'
import Brownbutton from '../Button/Brownbutton'

function Section01() {
  return (
    <div className='grid-container'>
    <div className="hero-container relative w-full h-screen overflow-hidden">
      <Image
        src="/images/Contactus/AboutHero.png"      // Local image in public folder
        alt="Hero Image"
        fill                        // makes image cover the parent
        style={{ objectFit: "cover" }}
        className="rounded-apple-hero"
        priority                    // loads fast for hero images
      />
      <div className='absolute inset-0 px-2 sm:px-5 md:px-10 mt-[50px] md:mt-[100px] flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center text-center'>
          <div className="lg:flex items-center justify-center gap-2 lg:gap-6">
            <h1 className="uppercase text-[40px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] encode-sans-medium leading-none animate-fade-in-up bg-gradient-to-r from-[#191919] to-[#383838] bg-clip-text text-transparent" style={{ animationDelay: '0.1s' }}>
              We'd Love to
            </h1>

            <div className="animate-fade-in my-4 lg:my-0" style={{ animationDelay: '0.2s' }}>
              <Brownbutton />
            </div>
          </div>

          <div className="flex justify-center">
            <h1 className="uppercase text-[40px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] encode-sans-medium leading-none animate-fade-in-up bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent" style={{ animationDelay: '0.3s' }}>
              Hear From You
            </h1>
          </div>
          <div className='mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14 flex justify-center'>
            <div className='max-w-[80%] animate-fade-in-up' style={{ animationDelay: '0.4s' }}>
              <p className='description text-center'>
                Born from a deep love for Sri Lankan culinary heritage, Mr Chilli connects you directly with the finest spices from the heart of Ceylon. Our journey began with a simple mission: to share the authentic flavors that have made Sri Lankan cuisine legendary.
              </p>
            </div>
          </div>
        </div>
        <div className='relative w-full h-[200px] sm:w-full sm:h-[300px] md:w-full md:h-[400px] lg:w-full lg:h-[500px] mt-8 sm:mt-10 md:mt-12 animate-scale-in' style={{ animationDelay: '0.5s' }}>
          <Image
            src="/images/Contactus/Product.png"
            alt="Product Image"
            fill
            style={{ objectFit: "contain" }}
            className=""
            priority
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Section01