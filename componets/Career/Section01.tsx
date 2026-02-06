import React from 'react'
import Image from 'next/image'
import Brownbutton from '../Button/Brownbutton'

function Section01() {
  return (
    <div className='grid-container'>
    <div className="hero-container relative w-full h-screen overflow-hidden">
        <Image
            src="/images/About/HeroBg.png"      // Local image in public folder
            alt="Hero Image"
            fill                        // makes image cover the parent
            style={{ objectFit: "cover" }}
            className="rounded-apple-hero"
            priority                    // loads fast for hero images
        />
        <div className="absolute inset-0 px-2 sm:px-5 md:px-10 ">
            <div className="min-h-screen flex items-center justify-center">
                <div className="grid lg:grid-cols-2 items-center w-full">

                    {/* Left */}
                    <div>
                        <div className="sm:flex items-center gap-2 lg:gap-6">
                            <h1 className="uppercase text-[40px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] encode-sans-medium leading-none animate-fade-in-up bg-gradient-to-r from-[#191919] to-[#383838] bg-clip-text text-transparent" style={{ animationDelay: '0.1s' }}>
                            Grow
                            </h1>

                            <div className="animate-fade-in my-4 sm:my-0" style={{ animationDelay: '0.2s' }}>
                                <Brownbutton />
                            </div>
                        </div>

                        <div className="ml-[10px] md:ml-[50px] lg:ml-[100px]">
                            <h1 className="uppercase text-[40px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] encode-sans-medium leading-none animate-fade-in-up bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent" style={{ animationDelay: '0.3s' }}>
                            With Mr Chilli
                            </h1>
                        </div>
                        <div>
                            <div className='mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14 flex items-end gap-6 lg:ml-[20px] xl:ml-[100px] 2xl:ml-[100px] '>
                                
                                <div className='animate-fade-in-up' style={{ animationDelay: '0.6s' }}>
                                    
                                    <p className='description'>
                                    Join our team or become a distributor. We're always looking for passionate individuals and business partners to help us grow.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[40vh] lg:h-[40vh] xl:h-[70vh] 2xl:h-[80vh] animate-scale-in" style={{ animationDelay: '0.7s' }}>
                        <Image
                            src="/images/Career/Product.png"
                            alt="Hero Image"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                </div>
            </div>

        </div>
    </div>

</div>
  )
}

export default Section01