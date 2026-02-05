import React from 'react'
import Image from "next/image";
import Brownbutton from "../Button/Brownbutton";

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
                                <div className="flex items-center gap-2 lg:gap-6">
                                    <h1 className="uppercase text-[40px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] encode-sans-medium leading-none animate-fade-in-up bg-gradient-to-r from-[#191919] to-[#383838] bg-clip-text text-transparent">
                                    Pure
                                    </h1>

                                    <div className="animate-fade-in">
                                        <Brownbutton />
                                    </div>
                                </div>

                                <div className="ml-[10px] md:ml-[50px] lg:ml-[100px]">
                                    <h1 className="uppercase text-[40px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] encode-sans-medium leading-none animate-fade-in-up bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent">
                                    Island
                                    </h1>
                                </div>

                                <h1 className="uppercase text-[40px] sm:text-[50px] md:text-[60px] lg:text-[60px] xl:text-[70px] 2xl:text-[90px] encode-sans-medium leading-none animate-fade-in-up bg-gradient-to-r from-[#191919] to-[#919191] bg-clip-text text-transparent">
                                    Spices
                                </h1>
                                <div>
                                    <div className='mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14 flex items-end gap-6 lg:ml-[20px] xl:ml-[100px] 2xl:ml-[100px] '>
                                        <div className='h-[200px] w-2 bg-black'>

                                        </div>
                                        <div className=''>
                                            <h2 className='subtitle'>
                                            SRI LANKAN SPICES
                                            </h2>
                                            <p className='description'>
                                                Born from a deep love for Sri Lankan culinary heritage, Mr Chilli connects you directly with the finest spices from the heart of Ceylon. Our journey began with a simple mission: to share the authentic flavors that have made Sri Lankan cuisine legendary.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right */}
                            <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[40vh] lg:h-[40vh] xl:h-[70vh] 2xl:h-[80vh]">
                                <Image
                                    src="/images/About/HeroProduct.png"
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